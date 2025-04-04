"use client";
import { BaseURL } from "@/helpers/axiosInstance";
import axios from "axios";
import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { ArrowBigDownDash, Copy, Link } from "lucide-react";
import Navbar from "@/components/Navbar";
import QRCode from "react-qr-code";
import toast from "react-hot-toast";
const JobImage = (props) => {
  const [job, setjob] = useState();
  const [ImageLink, setImageLink] = useState("");
  const [canvasStatus, setcanvasStatus] = useState(false);
  const [jobLoaded, setjobLoaded] = useState(false);
  const [caption, setcaption] = useState("");
  const [twitterCaption, settwitterCaption] = useState("");

  useEffect(() => {
    axios
      .get(BaseURL + "api/v1/job/" + props.params.slug)
      .then((res) => {
        if (res.status === 200) {
          setjobLoaded(true);
          setjob(res.data.job);
        }
      })
      .catch((err) => {});
    return () => {};
  }, []);

  const createSC = () => {
    html2canvas(document.getElementById("banner")).then(function (canvas) {
      const dataUrl = canvas.toDataURL();
      setcanvasStatus(true);
      setImageLink(dataUrl);
      setcaption(
        `${job.organization} is hiring for ${job.title} in ${job.district.name} for more information visit our website: www.jobs.jashandeep.me. #punjabvacancies #jobupdate #punjabjobs #punjab #job #jobalert @punjabvacancies #${job.district.name} #${job.district.name}jobs`
      );
      settwitterCaption(`Job Alert in ${job.district.name} Punjab 👇

✨ Profile: ${job.title} 
🏢 Organization: ${job.organization} 
🌆 District: ${job.district.name} 
💰 Salary: ${job.salary} 
👔 Experience: ${job.experience} 
🎓 Education: ${job.education} 
⌛️ Deadline: ${new Date(job.deadline).toDateString()} 

📝 Apply Now: https://jobs.jashandeep.me/job/${job.slug}
Good luck! 🍀👍

#jobalert #punjabjobalert #jobin${job.district.name} #${job.district.name}`);
    });
  };

  useEffect(() => {
    if (jobLoaded) {
      createSC();
    }
    return () => {};
  }, [jobLoaded]);

  if (!jobLoaded) {
    return (
      <div>
        <Navbar />
        <div className="container flex justify-center py-4 mx-auto">
          <div className="">
            <h1 className="block w-full my-48 text-2xl font-bold text-center text-slate-500">
              Getting Image Data
            </h1>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full ">
      <Navbar />
      <div className="container flex justify-center py-4 mx-auto">
        {!canvasStatus ? (
          <div className="block">
            <div className="">
              <h1 className="block w-full my-48 text-2xl font-bold text-center text-slate-500">
                Rendering Image
              </h1>
            </div>
            <div className="opacity-0">
              <div className="flex justify-between " id="banner">
                <div className="flex flex-col  w-[1280px] h-[1280px] border lightBg">
                  <div className="px-8 pt-8 header">
                    <h1 className="text-[100px] font-black">Job Alert</h1>
                    <ul className="mt-12 text-[42px]">
                      <li>
                        <span className="mr-6 font-medium">Profile:</span>
                        {job.title}
                      </li>
                      <li>
                        <span className="mr-6 font-medium">organization:</span>

                        {job.organization}
                      </li>
                      <li>
                        <span className="mr-6 font-medium">District:</span>

                        {job.district.name}
                      </li>
                      <li>
                        <span className="mr-6 font-medium">Salary:</span>

                        {job.salary}
                      </li>
                      <li>
                        <span className="mr-6 font-medium">Job type:</span>
                        {job.jobType}
                      </li>
                      <li>
                        <span className="mr-6 font-medium">Experience:</span>
                        {job.experience}
                      </li>
                      <li>
                        <span className="mr-6 font-medium">Education:</span>
                        {job.education}
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center h-full gap-12 mx-8">
                    <QRCode
                      style={{
                        height: "100%",
                      }}
                      bgColor="#f1ede4"
                      value={"https://jobs.jashandeep.me/job/" + job.slug}
                    />
                  </div>
                  <div className="px-16 pb-8 text-4xl footer">
                    <p className="flex justify-between font-medium ">
                      <span>Website: jobs.jashandeep.me</span>
                      <span>Instagram: @punjabvacancies</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <img className="w-full md:w-1/2" src={ImageLink} alt="canva" />
        )}
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <div className="flex flex-col gap-6 md:flex-row">
          <a
            className="flex items-center gap-2 px-4 py-2 duration-300 border rounded hover:bg-slate-100"
            href={ImageLink}
            download={job.title + ".png"}
          >
            <ArrowBigDownDash className="h-6" />
            Download Banner
          </a>

          <button
            className="flex items-center gap-2 px-4 py-2 duration-300 border rounded hover:bg-slate-100"
            type="button"
            onClick={() => {
              try {
                navigator.clipboard.writeText(caption);
                toast.success("Copied to clipboard");
              } catch (e) {
                toast.error("Failed to copy");
              }
            }}
          >
            <Copy className="h-4" />
            Copy Caption
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 duration-300 border rounded hover:bg-slate-100"
            type="button"
            onClick={() => {
              try {
                navigator.clipboard.writeText(twitterCaption);
                toast.success("Copied to clipboard");
              } catch (e) {
                toast.error("Failed to copy");
              }
            }}
          >
            <Copy className="h-4" />
            Copy Tweet
          </button>
        </div>

        <div className="grid justify-center w-full md:w-1/2 ">
          <p className="p-2 mt-6 text-sm border rounded text-slate-500">
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobImage;
