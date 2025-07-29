import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// image
import Recent1 from "../../../assets/Blog/Recent1.png";
import Recent2 from "../../../assets/Blog/Recent2.png";
import Recent3 from "../../../assets/Blog/Recent3.png";

// icons
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

// for carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BlogDetail: React.FC = () => {
  // to get data for current blog
  const location = useLocation();
  const { state } = location;
  const { img, topic, author, date, largeDescription } = state;
  // const { _id, img, topic, author, date, largeDescription } = state;

  // recent blog
  const navigate = useNavigate();

  interface LargeDescription {
    text1: string;
    text2: string;
    heading1: string;
    text3: string;
  }
  // Recent datatype
  interface Recent {
    img: string;
    date: string;
    author: string;
    topic: string;
    description: string;
    largeDescription: LargeDescription;
  }

  // Recent data
  const data: Recent[] = [
    {
      img: Recent1,
      date: "October 19, 2022",
      author: "By admin",
      topic:
        "Transforming Style: Exploring the Future of Fashion Design Platforms",
      description:
        "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum",
      largeDescription: {
        text1:
          'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
        text2:
          ' 1914 translation by H. Rackham "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
        heading1: "Section 1.10.33",
        text3:
          '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."',
      },
    },
    {
      img: Recent2,
      date: "October 19, 2022",
      author: "By admin",
      topic:
        "Innovative Fashion Design Platforms: Shaping the Next Generation of Trends",
      description:
        "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum",
      largeDescription: {
        text1:
          'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
        text2:
          ' 1914 translation by H. Rackham "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
        heading1: "Section 1.10.33",
        text3:
          '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."',
      },
    },
    {
      img: Recent3,
      date: "October 19, 2022",
      author: "By admin",
      topic:
        "Crafting Your Fashion Vision: Top Platforms for Designers in 2024",
      description:
        "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum",
      largeDescription: {
        text1:
          'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
        text2:
          ' 1914 translation by H. Rackham "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
        heading1: "Section 1.10.33",
        text3:
          '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."',
      },
    },
  ];

  // Recents carousel settings
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mx-5 lg:mx-28 my-14 lg:my-32 font-inter">
      {/* Clicked Blog description */}
      <div>
        <img src={img} alt="" className="h-[600px] object-cover w-full" />
        <h1 className="font-bold lg:text-[45px] text-3xl mt-12 text-[#2D3748]">
          {topic}
        </h1>
        <div className="flex justify-between lg:w-1/2 mt-8 mb-12 text-lg">
          <p className="font-bold text-[#2D3748]">Written {author}</p>
          <p className="text-[#718096]">{date}</p>
        </div>
        <div className="text-[#718096]">
          <p>{largeDescription}</p>
        </div>
        {/* <div className="text-[#718096]">
          <p>{largeDescription.text1}</p>
          <br />
          <p>{largeDescription.text2}</p>
          <br />
          <h2 className="text-[#2D3748] text-3xl font-bold">
            {largeDescription.heading1}
          </h2>
          <br />
          <p>{largeDescription.text3}</p>
        </div> */}
      </div>
      {/* Other recent blog */}
      <h1 className=" my-10 text-[#025195] font-bold text-3xl lg:text-5xl">
        Recent Blogs
      </h1>
      <div>
        <Slider {...settings1} className="">
          {data.map((Recent, index) => (
            <div key={index} className="rounded-2xl border overflow-hidden">
              <img
                src={Recent.img}
                alt=""
                className="h-64 w-full object-cover"
              />
              <div className="flex flex-col p-7 pt-5 lg:px-10 lg:pt-7 lg:pb-10">
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <FaRegCalendarDays className="text-xs" />
                    <p className="text-[#546879]">{Recent.date}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <IoPersonOutline className="text-sm" />
                    <p className="text-[#546879]">{Recent.author}</p>
                  </div>
                </div>
                <h3 className="text-[#025195] mt-4 lg:mt-6 mb-3 font-bold">
                  {Recent.topic}
                </h3>
                <p className="text-[#546879]">{Recent.description}</p>
                <div
                  onClick={() =>
                    navigate("/BlogDetail", {
                      state: {
                        img: Recent.img,
                        topic: Recent.topic,
                        author: Recent.author,
                        date: Recent.date,
                        largeDescription: Recent.largeDescription,
                      },
                    })
                  }
                  className="flex items-center mt-5 lg:mt-7 gap-2 cursor-pointer"
                >
                  <p className="text-[#025195] font-semibold text-sm">
                    Read More
                  </p>
                  <FaArrowRightLong className="text-[#025195]" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Join Our Community*/}
      <div className="flex flex-col w-full bg-[#025195] text-white lg:flex-row gap-10 md:gap-16 py-10 px-10 lg:py-16 lg:px-14 font-inter">
        <div className="lg:w-2/3 flex flex-col justify-center">
          <h1 className="text-center font-bold md:text-start text-xl md:text-3xl mb-8 md:mb-12">
            Join us and explore your fashion universe, reliving each occasion
            with the outfits you chose.
          </h1>
          <p className="text-xs  text-center md:text-start md:text-xl">
            Invite visitors to join the platform, whether as clients or
            designers, highlighting the benefits of becoming part of the
            community.
          </p>
        </div>
        <div className="lg:w-1/3 flex justify-center items-center">
          <button className="flex w-4/5 h-fit rounded-[50px] items-center justify-center px-8 md:px-16 md:py-4 py-3 text-white  text-xl md:text-lg  border">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
