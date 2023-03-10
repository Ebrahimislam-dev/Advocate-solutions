import { Box, Stack, Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { getNewsFeeds } from "../../../redux/actions/newxfeedAction";

const Feed = () => {
  const { currentUser } = useSelector(state => state.authentication)
  const dispatch = useDispatch()
  const allPosts = useSelector((state) => state?.newsfeed?.posts)
  const loading = useSelector((state) => state?.newsfeed?.loading)
  // sorted post
  const sortedPosts = allPosts.sort((a, b) => b.createdDate - a.createdDate)

  const isBooked = sortedPosts.filter(booked => booked.bookmarked === true && booked.bookmarkedUserEmail === currentUser?.email)
  useEffect(() => {

    if (isBooked.length === 0) {
      sortedPosts.bookmarked = false
    }
  }, [isBooked.length, sortedPosts])

  
  useEffect(() => {
    dispatch(getNewsFeeds())
  }, [dispatch])


  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          {
            sortedPosts?.map(postInfo => {
              return (
                <Post postInfo={postInfo} />
              )
            })
          }
        </>
      )}

    </Box>
  );
};

export default Feed;