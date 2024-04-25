import React, { Suspense } from "react";
import PageWrap from "./PageWrap";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const page = async () => {
  let summaryData = null;
  let successfullData = null;
  let expectedTransData = null;
  let defaultData = null;
  const session = await getServerSession(authOptions);

  if (session) {
    const getSummary = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/developer/transaction/get-summary`,
      {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
        },
      }
    );
    const getSuccessfullTrans = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/developer/transaction/get-succesful-payments`,
      {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
        },
      }
    );
    const getExpectedTrans = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/developer/transaction/get-expected-payments`,
      {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
        },
      }
    );
    const getDefaults = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/developer/transaction/get-missed-payments`,
      {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
        },
      }
    );
    const getSummaryData = await getSummary.json();
    const getSuccessfullTransData = await getSuccessfullTrans.json();
    const getExpectedTransData = await getExpectedTrans.json();
    const getDefaultsData = await getDefaults.json();
    summaryData = getSummaryData.value;
    successfullData = getSuccessfullTransData.value;
    expectedTransData = getExpectedTransData.value;
    defaultData = getDefaultsData.value;
  }
  return (
    <PageWrap
      summaryProp={summaryData}
      successfullTransProp={successfullData}
      expectedTransProp={expectedTransData}
      defaultProp={defaultData}
    ></PageWrap>
  );
};

export default page;
