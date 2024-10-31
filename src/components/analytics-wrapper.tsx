import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Suspense } from "react";

export default function AnalyticsWrapper() {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-CSF8R9NJ65" />
    </Suspense>
  );
}
