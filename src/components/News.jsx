import {  Image, Stack, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ErrorComponent from "./ErrorComponent";
import "../components/Nav.css";
import { Link } from "react-router-dom";
import Loader2 from "./Loader2";


const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
 
  
  useEffect(() => {
    const fetchnews = async () => {
      try {
        const { data } = await axios.get(`
        https://newsapi.org/v2/everything?q=bitcoin&apiKey=a12353e44cac46199b7274ec857ef576`);
        setNews(data.articles);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchnews();
  }, []);

  if (error) return <ErrorComponent message={"Error While Fetching News"} />;

  return (
    <div>
      <Stack height={"500"} overflowY={"scroll"} className="temp"> 
      {loading ? (
        <Stack height={"400px"} width={"400px"} pos={"relative"} top={"250px"} left={["30px","80px"]}>
          <Loader2 />
        </Stack>
        
      ) : (
        <>
        {news.map((i) => (
          <NewsCard
            key={i.title}
            title={i.title}
            source={i.source.name}
            url={i.url}
            urlToImage={i.urlToImage}
            author={i.author}
            description={i.description}
          />
        ))}
        </>
        )}
      </Stack>
    </div>
  );
};

const NewsCard = ({ author, source,description, title, urlToImage, url }) => {
  return (
    <Link to={url} width={"full"} height={"100vh"}>
      <VStack 
        shadow={"lg"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        display={"flex"}
        height={"85vh"}
        bg={"white"}
        color={"blackAlpha.900"}
        transform={"scale(0.9)"}
        width={["100%","80%"]}
        css={{
          "&:hover": {
            transform: "scale(1)",
          },
        }}
      >
        <VStack width={"full"} height={"full"} overflow={"cover"}>
          <Image src={urlToImage}></Image>
        </VStack>
        <VStack width={"100%"} height={["full","full"]} textAlign={"start"}>
          <Stack width={"80%"} height={"80%"}>
          <Text fontSize={"larger"} fontWeight={"bolder"}>{author}</Text>
          <Text fontSize={"large"} fontWeight={"bold"}>{title}</Text>
          <Text fontSize={"sm"} overflow={"hidden"} noOfLines={2}>{description}</Text>
          <Text>{source}</Text>
          </Stack>
        </VStack>
      </VStack>
    </Link>
  );
};



export default News;
