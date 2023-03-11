import { MainLayout } from "layouts/SecondMainLayout";
import { Post } from "modules/Post";
import { Flex } from "ui/Flex";
import { useEffect, ChangeEvent, useState, useDeferredValue } from "react";
import { usePosts } from "store";
import {
  Input,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Send, AddCircle } from "@mui/icons-material";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { MobileNavigation } from "modules/MobileNavigation";

const StyledAnimation = styled(motion.div)`
  background-color: #dcb740;
  border-radius: 20px;
  height: min-content;
  padding: 20px;
`;

export const HomePage = () => {
  const [createPostValue, setCreatePostValue] = useState("");

  const [lastPostRef, lastPostInView] = useInView({
    threshold: 0.1,
  });

  const { posts, getPosts, createPost, skip } = usePosts(state => state);
  const postsValues = useDeferredValue(posts);

  useEffect(() => {
    if (lastPostInView) {
      getPosts(skip);
    }
  }, [lastPostInView]);

  const handleCreatePostChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCreatePostValue(e.target.value);
  };

  const handleCreatePost = () => {
    createPost({ text: createPostValue });
    setCreatePostValue("");
  };

  return (
    <MainLayout>
      <Flex d="column" g="20">
        {/* <StyledAnimation
          animate={{ height: 5000 }}
          transition={{ duration: 10 }}
        >
          Задача организации, в особенности же укрепление и развитие структуры
          играет важную роль в формировании дальнейших направлений развития.
          Разнообразный и богатый опыт сложившаяся структура организации
          позволяет оценить значение модели развития. Разнообразный и богатый
          опыт начало повседневной работы по формированию позиции требуют
          определения и уточнения направлений прогрессивного развития.
          Значимость этих проблем настолько очевидна, что постоянное
          информационно-пропагандистское обеспечение нашей деятельности
          представляет собой интересный эксперимент проверки системы обучения
          кадров, соответствует насущным потребностям. Повседневная практика
          показывает, что постоянный количественный рост и сфера нашей
          активности представляет собой интересный эксперимент проверки
          существенных финансовых и административных условий.
        </StyledAnimation> */}
        <FormControl variant="standard" fullWidth>
          <InputLabel>Что у вас нового?</InputLabel>
          <Input
            onChange={handleCreatePostChange}
            value={createPostValue}
            multiline
            maxRows={15}
            inputProps={{ maxLength: 500, minLength: 3 }}
            endAdornment={
              <>
                <InputAdornment position="end">
                  <IconButton onClick={() => console.log("add")}>
                    <AddCircle />
                  </IconButton>
                </InputAdornment>
                <InputAdornment position="end">
                  <IconButton onClick={handleCreatePost}>
                    <Send />
                  </IconButton>
                </InputAdornment>
              </>
            }
          />
        </FormControl>

        {postsValues.length === 0 ? (
          <div>LOADING........................</div>
        ) : (
          <AnimatePresence>
            {postsValues.map((post, index) => {
              if (postsValues.length === index + 1) {
                return <Post key={post._id} post={post} ref={lastPostRef} />;
              }
              return <Post key={post._id} post={post} />;
            })}
          </AnimatePresence>
        )}
      </Flex>
    </MainLayout>
  );
};
