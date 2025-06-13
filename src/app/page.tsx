import HeroBanner from "@/components/hero-banner/HeroBanner";
import JobListingInfo from "@/components/job-listing-info/JobListingInfo";
import JobListing from "@/components/job-listing/JobListing";

export default function Home() {
 
  return (
    <div>
      <HeroBanner />
      <div className="grid gap-4 grid-rows sm:md:lg:grid-cols-[auto_30%] mt-5">
        <div className="border-0 gap-5 ">
          <h2>Job Listings</h2>
          <div className="grid grid-cols-[40%_auto] gap-4"> {/* BEGIN: New Grid */}
            <div>  <JobListing /></div>
            <div> <JobListingInfo /> </div>
          </div>
        </div>
        <div className="border-0 border-primary pl-0 sm:md:lg:border-l-2 border-dotted sm:md:lg:pl-5 align-text-top">
          <h2>Discussion board</h2>
        </div>
      </div>
    </div>
  );
}
