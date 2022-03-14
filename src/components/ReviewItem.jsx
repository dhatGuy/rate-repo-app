import React from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";
import useMe from "../hooks/useMe";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
    padding: 10,
    backgroundColor: theme.colors.white,
  },
  rating: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderColor: theme.colors.background,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  username: {
    fontWeight: "900",
    fontSize: 20,
  },
  date: {
    opacity: 0.5,
    color: theme.colors.textSecondary,
    paddingBottom: 10,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 4,
    elevation: 3,
    marginTop: 10,
    backgroundColor: theme.colors.primary,
  },
});

const ReviewItem = ({ review }) => {
  const navigate = useNavigate();
  const { data, refetch } = useMe(true);
  const { deleteReview } = useDeleteReview(review.node.id);

  const viewRepo = () => {
    navigate(`/repository/${review.node.repository.id}`);
  };

  const onDeleteReview = () => {
    Alert.alert(
      "Delete Review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => deleteReview() && refetch(),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text>{review.node.rating}</Text>
      </View>
      <View>
        <Text style={styles.username}>{review.node.user.username}</Text>
        <Text>{review.node.createdAt}</Text>
        <Text>{review.node.text}</Text>

        {data?.me.id === review.node.user.id && (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Pressable style={styles.btn} onPress={() => viewRepo()}>
              <Text color={"white"} fontWeight={"bold"} style={styles.text}>
                View repository
              </Text>
            </Pressable>
            <Pressable
              style={{ ...styles.btn, backgroundColor: "red", marginLeft: 15 }}
              onPress={() => onDeleteReview()}
            >
              <Text color={"white"} fontWeight={"bold"} style={styles.text}>
                Delete Review
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default ReviewItem;
