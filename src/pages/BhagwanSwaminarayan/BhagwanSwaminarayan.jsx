import React from "react";
import "./BhagwanSwaminarayan.css";
import Bhagwanji from "../../assets/Bhagwanji.png";
import Navbar from "../../components/Navbar/Navbar";
import RightNavigation from "../../components/RightNavigation/RightNavigation";
import Bottom from "../../components/Bottom/Bottom";

const BhagwanSwaminarayan = () => {
  return (
    <div className="Bhagwan-Main">
      <div>
        <Navbar />
      </div>
      <div className="head-text">
        <h2>Bhagwan Swaminarayan</h2>
      </div>
      <div className="Bhagwan-main-div">
        <div className="Bhagwan-child1-div">
          <img className="Bhagwan-page-img" src={Bhagwanji} alt="" />
          <p>
            Lord supreme <br />
            Bhagwan Swaminarayan – this site is dedicated at His lotus feets.
          </p>
        </div>
        <div className="Bhagwan-child2-div">
          <p>
            Lord Shri Swaminarayan was born to a samvedi Brahmin family on 9th
            day of bright half of the month Chaitra of Vikram Samvat 1837 i.e.
            on 3rd April, 1781, in a small village called Chhapaiya near
            Ayodhya, U.P., India. His fatherâ€™s name was Dharmadev and his
            motherâ€™s name was Bhaktimata. In the tender age of 7 years only,
            he learned all the religious scriptures including Vedas from his
            father and became victorious in a conference of scholars held in
            Kashi. After serving his parents, at the age of 11 only, he left
            village Chhapaiya and proceed alone towards the forests in the
            north. <br />
            Lord Shri Swaminarayan came to Gujarat at the age of 18 and extended
            his work of spreading true religion. He propagated Uddhav
            (Swaminarayan) doctrine popularly known as â€œVishishtadvaitâ€.{" "}
            <br />
            At age 21, he established Swaminarayan Sampraday, with the blessings
            of his Guru Sadguru Ramanand Swami. He initiated more than 1500
            saints to spread the pious Sampraday. To achieve ultimate redemption
            he taught the â€œSwaminarayanâ€ mahamantra. <br />
            To preserve the purity in the religion, he devised five basic Codes
            of Conducts for Haribhakt (Devotee) like not to steal, not to eat
            meat, not to drink, not to commit adultery, not to follow impurity
            and for Tyagi (Saints) like, Nishkam (Lust-less), Nirlobh
            (Greed-less), Nissenh (Attachment-less), Nisswad (Taste-less) and
            Nirman (Ego-less). <br />
            He established beautiful temples at Ahmedabad, Bhuj, Vadtal,
            Dholera, Junagadh, Gadhpur for Upasana â€“ worshipping God in all
            His greatness & glory and Bhakti â€“ Devotion. With all these, he
            gave a small but huge Code of Conducts with only 212 verses, The
            Shikshapatri. And the nectar of spiritual discourses performed by
            Bhagwan Swaminarayan, The Vachnamrutam. <br />
            Thus, in a short span of 49 years He revived Hinduism, glorified
            spiritual values and founded the Swaminarayan Faith and left for His
            Divine Abode, Akshardham. <br />
            Mahatma Gandhiji has opinedâ€¦ â€œIn India, there are so many
            religious sects, but the Swaminarayan sect is praise worthy, pious,
            pure and attaractive. I have a very high regard for this sect.â€
            <br />
            The great follower of Mahatma Gandhi and a well known thinker Shri
            Kishorlal Mashruvala has said about Lord Shri Swaminarayan â€œWith
            his divine light, he enlighted the hearts of several people, took
            away the bad habits and vices of backward people, included
            non-hindus in Hindu religion, encouraged the literature, music and
            arts, promoted non-violent â€˜Yagnasâ€™, directed the way of pure
            devotion and divine knowledge. He was the tutor of Bhagawat-Dharma
            and the preacher of the principles of Vyasji.â€ <br />
          </p>
        </div>
        <div className="Bhagwan-child3-div">
          <RightNavigation />
        </div>
      </div>
      <div>
        <Bottom></Bottom>
      </div>
    </div>
  );
};

export default BhagwanSwaminarayan;
