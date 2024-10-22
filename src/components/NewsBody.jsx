import React from "react";
import { news1, news2, date_icon } from "../assets";
import { newsDetails } from "../services/news";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const NewsBody = () => {
  const postId = useParams();

  console.log(postId);
  console.log(postId.id);

  const { data } = useQuery({
    queryFn: () => newsDetails(postId.id),

    queryKey: ["details", postId.id],

    onSuccess: (data) => {
      console.log(data);
      console.log(data.image);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if(data !== undefined) {

  return (
    <div class="flex flex-col items-center">
      <div>
        <h1 className="md:w-[600px] w-[328px] text-color1 text-[25px] font-bold mb-4 mt-20 font-bodyfont-700">
          {data.title}
        </h1>
        <div className="md:flex gap-4 mb-10">
          <p className="text-color2 text-[13px] font-bodyfont-400">
            Written by {data.user.firstName} {data.user.lastName}
          </p>
          <div className="flex">
            <img src={date_icon} alt="bluetick" className="mr-2" />{" "}
            <p className="text-color2 text-[13px] font-bodyfont-400">
              {new Date(post.createdAt).getDate()}{" "}
              {new Date(post.createdAt).toLocaleString("default", {
                month: "long",
              })}{" "}
              {new Date(post.createdAt).getFullYear()}
            </p>
          </div>
        </div>
      </div>

      <img
        className="md:w-[800px] w-[380px] md:h-[400px] h-[271px]"
        src={data.image}
        alt="Your Image"
      />

      <p className="md:w-[600px] w-[328px] text-color2 text-[13px] font-bodyfont-400 mb-6 mt-6">
        {data.description}
      </p>

      {/* <img className="md:w-[800px] w-[380px] md:h-[400px] h-[271px]" src={news2} alt="Your Image" />

    <p className='md:w-[600px] w-[328px] text-color2 text-[13px] font-bodyfont-400 mb-6 mt-6'>
      The PWC report is apt to let us know that Africa's most populous black nation can get a large slice of the global pie, but how prepared is Nigerian to sit on the table and dine with our chest out alongside countries like the United States, Japan, China
      et al?<br /><br />

      It is important to note that for majority of Nigerian youth, put at 70% of the country's population of 206 million people, according to the National Population Commission (NPC), the closest to being IT savvy is owning a smartphone, being able
      to efficiently gamble on football betting sites and actively use social media apps.<br /><br />

      Unemployment, naturally a major catalyst for diversification into the creatives, is at its highest in the nation's history at 33 per cent, with the number of unemployed individuals placed at 23 million, quoted from a report by Jobberman in collaboration
      with Young Africa Works and Mastercard Foundation. Is the PWC report something for the unemployed and underemployed to be ecstatic about?<br /><br />

      It's a two way street. A collaborative report between the Federal Ministry of Youth and Sports Development and the National Bureau of Statistics across the six geo-political zones of the federation states that out of a total of 23.4 million people
      surveyed; only 1.3 million are certified IT professionals, skilled in areas like web design, graphics, Artificial Intelligence, multimedia, networking and software engineering.

    </p> */}
    </div>
  );
}
};

export default NewsBody;
