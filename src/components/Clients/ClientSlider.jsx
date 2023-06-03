import React from "react";
import styled from "styled-components";
import { IoIosQuote } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { Helmet } from "react-helmet";

const ClientSlider = (props) => {
  const { name, position, img_url, stars, disc } = props.item;
  return (
    <>
      <Helmet>
        <title>TESTIMONIALS | UI/UX Developer | What Clients Say ?</title>
        <meta
          name="description"
          content=" Working with Muneer Khair was an absolute pleasure. Their expertise in front-end web development truly elevated our website. They effortlessly transformed our designs into a fully functional and visually stunning website. Their attention to detail, responsiveness, and commitment to delivering high-quality work make them an invaluable asset to any project"
        />
      </Helmet>

      <Container>
        <Header>
          <span className="quote">
            <IoIosQuote />
          </span>
          <div>
            {Array(stars)
              .fill()
              .map((_, i) => (
                <span className="star" key={i}>
                  <AiFillStar />
                </span>
              ))}
          </div>
        </Header>
        <Body>{disc}</Body>
        <Footer>
          <img src={img_url} alt={name} />
          <div className="details">
            <h1>{name}</h1>
            <p>{position}</p>
          </div>
        </Footer>
      </Container>
    </>
  );
};

export default ClientSlider;

const Container = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 1.5rem 1rem;
  margin: 0 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .quote {
    font-size: 3rem;
    color: #01be96;
    opacity: 0.7;
  }

  .star {
    color: #ffcd3c;
    font-size: 1.3rem;
  }
`;
const Body = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50px;
    object-fit: cover;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 700;
    @media (max-width: 580px) {
      font-size: 1rem;
    }
    @media (max-width: 538px) {
      font-size: 0.9rem;
    }
  }

  p {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
    @media (max-width: 538px) {
      font-size: 0.6rem;
    }
  }
`;
