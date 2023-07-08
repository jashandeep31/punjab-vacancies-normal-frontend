import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <div className="mt-6 md:mt-12">
                    <h1 className="text-lg font-bold">Terms & Conditions</h1>
                    <div className="grid gap-4 my-4 text-sm tracking-wide md:my-6 text-slate-600 ">
                        <p>
                            <span className="mr-3">1.</span>
                            We do not directly post job vacancies on our
                            website. Instead, we gather job postings from
                            various reliable sources such as newspapers,
                            official websites, and other trusted platforms. By
                            curating information from these diverse sources, we
                            aim to provide you with a comprehensive and
                            up-to-date collection of job opportunities specific
                            to Punjab.
                        </p>
                        <p>
                            <span className="mr-3">2.</span>
                            It is important to note that we cannot guarantee job
                            security for the positions listed on our website.
                            Since the jobs we feature are offered by third-party
                            companies, the terms and conditions of employment
                            are determined by those companies. We recommend that
                            you thoroughly research and evaluate any job
                            opportunity before making any commitments or
                            decisions.
                        </p>
                        <p>
                            <span className="mr-3">3.</span>
                            We want to emphasize that we never charge any fees
                            for job listings or related services. It is
                            essential to be cautious of any individuals or
                            organizations that request money or any form of
                            payment in exchange for a job. Our primary objective
                            is to provide you with access to job vacancies and
                            help facilitate connections between job seekers and
                            employers, without any financial obligations on your
                            part.
                        </p>
                        <p>
                            <span className="mr-3">4.</span>
                            Users are solely responsible for their interactions
                            and dealings with employers or third parties found
                            through our website. We do not take any
                            responsibility or liability for any disputes,
                            losses, or damages arising from such interactions.
                            It is advisable to exercise caution and use your
                            judgment while engaging with potential employers or
                            individuals.
                        </p>
                        <p>
                            <span className="mr-3">5.</span>
                            Our website may contain links to external websites
                            or resources that are not under our control. We are
                            not responsible for the content, availability, or
                            any issues arising from the use of such external
                            links. Users should review the terms and conditions,
                            privacy policies, and practices of any third-party
                            websites they visit through our platform.
                        </p>
                        <p>
                            <span className="mr-3">6.</span>
                            We reserve the right to modify, update, or remove
                            any job listings, features, or content on our
                            website without prior notice. We may also update our
                            terms and conditions as necessary. Users are
                            encouraged to regularly review the terms to stay
                            informed about any changes.
                        </p>{" "}
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <Footer />
            </div>
        </div>
    );
}
