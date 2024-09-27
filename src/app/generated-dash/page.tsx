import Navbar from "@/components/Navbar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


export default function Home() {
    return (
      <>
        <Navbar></Navbar>
       <div className=" my-10 mx-40 flex flex-col">
        <h1 className=" text-center text-2xl sm:text-4xl">John Doe</h1>
        <div className="flex justify-center flex-row gap-4 mb-4">
            <span>Male</span>
            <span>|</span>
            <span>45 years</span>
        </div>
        <div className=" grid grid-cols-12 gap-4">
        <Card className=" col-span-8">
            <CardHeader>
                <CardTitle>Medical History</CardTitle>
                <p>Chronic Diseases: Hypertension (Controlled with medication), Type 2 Diabetes (Moderate)</p>
                <p>Surgeries: Appendectomy (2012)</p>
                                  
            </CardHeader>
            <CardContent className="flex flex-row justify-around">
                <div>
                <ul>Current Medications:</ul>
                <li>Metformin: 500 mg, twice daily</li>                   
                <li>Amlodipine: 5 mg, once daily</li>                   
                </div>
                <div>
                <ul>Uploaded Documents:</ul>
                <li>Blood Test Report (PDF)</li>                   
                <li>MRI Scan (Image)</li> 
                </div>
            </CardContent>
        </Card>
        <Card className=" col-span-4">
            <CardHeader>
                <CardTitle>Overall Health Risk:</CardTitle>
                <CardDescription>72% (High Risk)</CardDescription>
            </CardHeader>
            <CardContent>
                <CardTitle>Risk Breakdown:</CardTitle>
                <p>Cardiovascular Risk: 80% (High)</p>
                <p>Diabetes Risk: 65% (Moderate)</p>
                <p>Respiratory Risk: 40% (Low)</p>
            </CardContent>
        </Card>
        <Card className=" col-span-12 flex flex-row">
            <CardContent className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M2 16h15v3H2zm18.5 0H22v3h-1.5zM18 16h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1 0 1.85.83 1.85 1.85S17.5 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03m-2.82 2.47H14.5c-1 0-1.85-.98-1.85-2s.85-1.75 1.85-1.75v-1.5a3.35 3.35 0 0 0-3.35 3.35a3.35 3.35 0 0 0 3.35 3.35h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16"/></svg>
            <p className="text-center">Yes (10 cigarettes/day)</p>
            </CardContent>
            <CardContent className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m7.5 7l-2-2h13l-2 2M11 13v6H6v2h12v-2h-5v-6l8-8V3H3v2z"/></svg>
            <p className="text-center">Occasionally (1-2 drinks/week)</p>
            </CardContent>
            <CardContent className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 48 48"><g fill="currentColor"><path d="M31.25 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-5.557 20.397l5.193 5.124a2 2 0 0 1 .457.693l2.769 7.055a2 2 0 0 1-3.724 1.462l-2.614-6.661l-8.928-8.81a2 2 0 0 1-.583-1.649l.715-6.32c-1.724 1.714-3.054 4.123-4.073 7.316a2 2 0 1 1-3.81-1.216c1.87-5.86 4.975-10.246 10.185-12.257l.023-.009c1.327-.493 2.707-.453 3.937.182c1.181.611 2.022 1.666 2.573 2.848l.648 1.4c.488 1.058.898 1.95 1.293 2.732c.553 1.1.998 1.83 1.438 2.342c.408.474.813.766 1.33.968c.556.217 1.335.367 2.538.403a2 2 0 1 1-.12 3.998c-1.445-.043-2.728-.228-3.873-.675c-1.183-.462-2.116-1.165-2.91-2.09c-.5-.582-.94-1.247-1.35-1.97z"/><path d="m18.263 30.22l3.315 3.18l-1.526 5.147a2 2 0 0 1-.684 1.006l-5.134 4.023a2 2 0 0 1-2.467-3.15l4.632-3.628l1.395-4.71z"/></g></svg>
            <p className="text-center">No regular exercise</p>
            </CardContent>
            <CardContent className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.06 23h1.66c.84 0 1.53-.65 1.63-1.47L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26c1.44 1.42 2.43 2.89 2.43 5.29zM1 22v-1h15.03v1c0 .54-.45 1-1.03 1H2c-.55 0-1-.46-1-1m15.03-7C16.03 7 1 7 1 15zM1 17h15v2H1z"/></svg>
            <p className="text-center">Balanced diet, but high sugar intake</p>
            </CardContent>
            <CardContent className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="M4 12v24m40-7v7m0-7H4"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22 16v13h22V19a3 3 0 0 0-3-3z"/><circle cx="13" cy="20" r="3" fill="currentColor"/></g></svg>
            <p className="text-center">6-7 hours per night</p>
            </CardContent>
            <CardContent className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-4.55-9.4l3.575-2.6L7.45 7.4l-.9 1.2L8.475 10L6.55 11.4zm3.05 4.45l1.5-1.5l1.5 1.5l1.5-1.5l.975.975l1.05-1.05L15 13.45l-1.5 1.5l-1.5-1.5l-1.5 1.5l-1.5-1.5l-2.025 2.025l1.05 1.05L9 15.55zm6.05-4.45l.9-1.2l-1.925-1.4l1.925-1.4l-.9-1.2l-3.575 2.6z"/></svg>
            <p className="text-center">7/10 (High)</p>
            </CardContent>
        </Card>
        <Card className=" col-span-12">
            <CardHeader>
                <CardTitle>Pain Analysis</CardTitle>
                <CardDescription>Pain Description: Sharp pain in the lower back, intermittent, worsens with physical activity.</CardDescription>
                <CardDescription>Pain Intensity: 6/10</CardDescription>
                <CardDescription>Duration: 2 weeks</CardDescription>
                <CardDescription>Short Diagnosis: Likely muscle strain due to a sedentary lifestyle and lack of regular exercise.</CardDescription>
            </CardHeader>
        </Card>
        
        <Card className=" col-span-6">
            <CardHeader>
                <CardTitle>Suggested Remedies:</CardTitle>
                <CardDescription>Rest the lower back and avoid lifting heavy objects.</CardDescription>
                <CardDescription>Apply a cold compress for 20 minutes several times a day.</CardDescription>
                <CardDescription>Take over-the-counter anti-inflammatory medication like ibuprofen.</CardDescription>
            </CardHeader>
        </Card>
        <Card className=" col-span-6">
            <CardHeader>
                <CardTitle>Recommended Lifestyle Changes:</CardTitle>
                <CardDescription>Start light exercises such as walking and stretching to strengthen the back.</CardDescription>
                <CardDescription>Maintain proper posture when sitting or standing for long periods.</CardDescription>
                <CardDescription>Increase daily physical activity to reduce the risk of future injuries.</CardDescription>
            </CardHeader>
        </Card>
        </div>
       </div>
      </>
    );
  }