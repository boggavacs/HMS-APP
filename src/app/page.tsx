import DiscussionItem from "@/components/discussion-item/DiscussionItem";
import HeroBanner from "@/components/hero-banner/HeroBanner";
import JobListingInfo from "@/components/job-listing-info/JobListingInfo";
import JobListing from "@/components/job-listing/JobListing";

export default function Home() {
 
  return (
    <div>
      <HeroBanner />
      <div className="grid gap-4 grid-rows sm:md:lg:grid-cols-[auto_30%] lg:mt-12">
        <div className="border-0 gap-5 ">
          <h2 className="mb-4 p-0">Job Listings</h2>
          <div className="lg:md:grid grid-cols-[40%_auto] gap-15">
            <div>  <JobListing /></div>
            <div> <JobListingInfo /> </div>
          </div>
        </div>
        <div className="border-0 border-primary pl-0 sm:md:lg:border-l-2 border-dotted sm:md:lg:pl-5 align-text-top">
          <h2 className="mb-4 p-0">Discussion board</h2>
          <div>
            {/* <DiscussionItem /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
