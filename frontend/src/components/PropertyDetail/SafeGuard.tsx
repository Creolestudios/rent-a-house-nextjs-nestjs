import React from "react";
import { SafeGuardWrapper } from "./PropertyDetail.styles";
import shieldImg from "@/assets/images/shield.png";
import Image from "next/image";
import { safeGuard } from "@/config/constants";

const SafeGuard = () => {
  return (
    <SafeGuardWrapper>
      <Image src={shieldImg} width={64} height={64} alt="img" />
      <div className="content">
        <div className="title">{safeGuard.title}</div>
        <p>{safeGuard.body}</p>
      </div>
    </SafeGuardWrapper>
  );
};

export default SafeGuard;
