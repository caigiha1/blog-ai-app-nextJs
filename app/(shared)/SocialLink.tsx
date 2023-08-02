import React from "react";
import Image from "next/image";
import Twitter from "../../public/assets/social_twitter.png";
import Discord from "../../public/assets/social_discord.png";
import FaceBook from "../../public/assets/social_facebook.png";
import Instagram from "../../public/assets/social_instagram.png";
import Pinterest from "../../public/assets/social_pinterest.png";
import Google from "../../public/assets/social_google.png";

type Props = {};

const SocialLink = (props: Props) => {
  return (
    <div className="flex justify-between items-center gap-7">
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <Image
          alt="twitter"
          src={Twitter}
          width={20}
          height={20}
          className="hover:opacity-50"
        />
      </a>
    </div>
  );
};

export default SocialLink;
