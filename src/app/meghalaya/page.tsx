'use client'

import Navbar from '@/components/Navbar'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DirectionAwareHover1 } from '@/components/ui/direction-aware-hover1'
import Footer from '@/components/Footer'

const Page = () => {
  return (
    <div>
      <div className="p-5">
        <div className="flex justify-center py-5 sm:p-5 sm:pb-0 " >
          <div className="max-w-5xl w-full border-b pb-5">
            <div className="text-3xl font-semibold sm:text-6xl uppercase text-gray-500 ">
              Meghalaya
            </div>
            <div className="font-medium text-sm capitalize pt-2 text-gray-400">
              Destinations of meghalaya
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-5 sm:p-10"> 
          <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 w-full gap-10">
            <div className="text-sm flex flex-col gap-3 order-2 sm:order-1">
              <p>
                {"Meghalaya, known as the 'abode of clouds' is a mesmerizing state in northeast India, rich in natural beauty and cultural heritage. Carved from Assam on January 21, 1972, it comprises the United Khasi, Jaintia Hills, and Garo Hills. Covering an area of 22,429 square kilometers, Meghalaya is home to over 3.2 million people, with its capital, Shillong, often dubbed the 'Scotland of the East' by the British due to its lush landscapes and misty hills."}
              </p>
              <p>
                {"The state shares its southern and western borders with Bangladesh, and its northern and eastern boundaries with Assam. One of the wettest places on earth, Meghalaya's southern Khasi Hills record an astounding 12,000 mm of rainfall annually. Over 70% of the state is covered in forests, renowned for their rich biodiversity of flora and fauna."}
              </p>
              <p>
                {"A unique feature of Meghalaya is its matrilineal society, where lineage and inheritance pass through the female line. Predominantly agrarian, the state grows crops like potatoes, rice, pineapples, and spices, while also having a notable commercial forestry sector. Though rich in minerals, Meghalaya lacks major industries but serves as a key trading hub with Bangladesh."}
              </p>
              <p>
                {"Interestingly, a dramatic climate event around 2250 BCE, evidenced by formations in Meghalaya's Mawmluh cave, led to the naming of the Meghalayan Age, a stage in the Holocene epoch. With its central institutions like the North Eastern Council Secretariat in Shillong, Meghalaya continues to be a vital and fascinating part of India's northeast."}
              </p>
            </div>
            <DirectionAwareHover1 imageUrl={"https://ewooifarchgirohujmyz.supabase.co/storage/v1/object/public/Image/wei-sawdong.webp?t=2024-09-14T06%3A00%3A07.809Z"} className=' h-[516px] rounded-md order-1 sm:order-2'>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl">Wei Sawdong Fall</p>
                <p className="font-normal text-sm">Cherrapunji, East Khasi Hills</p>
              </div>
            </DirectionAwareHover1>
          </div>
        </div>
        <div className="flex justify-center py-5  " >
          <div className="max-w-5xl w-full border-b pb-5">
            <div className="text-xl font-thin sm:text-3xl uppercase text-gray-500 ">
              What you are looking for ?
            </div>
          </div>
        </div> 
        <div className="flex justify-center">
          <Tabs defaultValue="geography" className=" w-full max-w-5xl">
            <TabsList className=' bg-white rounded-none'>
              <TabsTrigger value="geography">Geography</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="culture">Culture</TabsTrigger>
              <TabsTrigger value="transport">Transport</TabsTrigger>
            </TabsList>
            <TabsContent value="geography">
              <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-5 py-3">

                <DirectionAwareHover1 imageUrl='https://ewooifarchgirohujmyz.supabase.co/storage/v1/object/public/Image/daribokgre.webp?t=2024-09-14T06%3A01%3A17.327Z' className='h-full border rounded-lg order-1'>
                  <p className="font-bold text-xl">Daribokgre</p>
                  <p className="font-normal text-sm">Tura, West Garo Hills</p>
                </DirectionAwareHover1>

                <div className="text-sm p-0 sm:p-5 flex flex-col justify-center  order-2">
                  <p>
                    {"Meghalaya, one of India's Seven Sister States, is a land of breathtaking mountains, valleys, and rich geological heritage. The state's landscape is dominated by ancient Archean rock formations that house valuable minerals like coal, limestone, uranium, and sillimanite. Rivers crisscross the region, with many carving deep gorges and creating stunning waterfalls, particularly in the Khasi Hills. The state's highest point, Shillong Peak, rises to 1,961 meters, offering sweeping views over its capital, Shillong. The Garo Hills, known for their plains, are home to Nokrek Peak, standing tall at 1,515 meters. Named by geographer S.P. Chatterjee, Meghalaya truly lives up to its title as the 'abode of clouds.'"}
                  </p>
                </div>

                <div className="text-sm p-0 sm:p-5 flex flex-col gap-3 justify-center order-4 sm:order-3">
                  <p>
                  {"Meghalaya, the wettest place on Earth, receives an astonishing average annual rainfall of up to 12,000 mm in some areas. The town of Sohra (Cherrapunji) holds the world record for the most rainfall in a single month, while nearby Mawsynram claims the record for the most rain in a year. The state's climate varies with its geography; the lower-lying Garo Hills experience high temperatures year-round, while the elevated Shillong region remains cooler, rarely exceeding 28°C, with sub-zero temperatures common in winter. This unique combination of extreme rainfall and diverse climates defines Meghalaya's dramatic natural landscape."}
                  </p>
                </div>

                <DirectionAwareHover1 imageUrl='https://ewooifarchgirohujmyz.supabase.co/storage/v1/object/public/Image/nohkalikai-falls.webp?t=2024-09-14T05%3A48%3A55.244Z' className='h-full border rounded-lg order-3 sm:order-4'>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-xl">Nohkalikai Falls</p>
                    <p className="font-normal text-sm">Cherrapunji, East Khasi Hills</p>
                  </div>
                </DirectionAwareHover1>

                <DirectionAwareHover1 imageUrl='https://ewooifarchgirohujmyz.supabase.co/storage/v1/object/public/Image/cherrapunji.webp?t=2024-09-14T05%3A47%3A53.698Z' className='h-full rounded-lg border order-5'>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-xl">Cherrapunji </p>
                    <p className="font-normal text-sm">Cherrapunji, East Khasi Hills</p>
                  </div>
                </DirectionAwareHover1>

                <div className="text-sm p-0 sm:p-5 flex flex-col gap-3 justify-center order-6">
                  <p>
                    {"Around 70% of Meghalaya is covered in lush forests, with over 9,000 square kilometers being dense, subtropical primary forests. These forests, among the richest botanical habitats in Asia, support an incredible diversity of plant life. Sacred groves, preserved by local communities for centuries due to cultural and religious beliefs, offer protection to rare species. Notable biodiversity hotspots include the Nokrek Biosphere Reserve and Balphakram National Park. Meghalaya's forests are home to a variety of unique plant species, including nearly 325 types of orchids, particularly abundant in the Khasi Hills."}
                  </p>
                </div>

                <div className="text-sm p-0 sm:p-5 flex flex-col gap-3 justify-center order-8 sm:order-7">
                  <p>
                    {"Meghalaya's wildlife is just as diverse, with a wide array of mammals, reptiles, birds, and insects. The state is home to elephants, red pandas, hoolock gibbons, and rare bats that inhabit its limestone caves. Its birdlife is equally impressive, with 660 species, including the great Indian hornbill and the grey peacock pheasant. The forests also shelter a vibrant population of reptiles, from pythons to king cobras, and over 250 species of butterflies. In 2020, the discovery of the largest subterranean fish in the Jaintia Hills highlighted Meghalaya's ongoing importance as a region of ecological wonders."}
                  </p>
                </div>

                <DirectionAwareHover1 imageUrl='https://ewooifarchgirohujmyz.supabase.co/storage/v1/object/public/Image/red-panda.webp?t=2024-09-14T06%3A00%3A07.809Z' className='h-full rounded-lg border order-7 sm:order-8'>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-xl">Red Panda </p>
                    <p className="font-normal text-sm">Nokrek National Park, West Garo Hills</p>
                  </div>
                </DirectionAwareHover1>
              </div>
            </TabsContent>
            <TabsContent value="history">
              <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-5 py-3">

                <DirectionAwareHover1 imageUrl='/neolithic.webp' className='h-full border rounded-lg order-1'>
                  <p className="font-bold text-xl">Neolithic artifacts</p>
                  <p className="font-normal text-sm">2,700 years-old from Gawak Abri, Garo Hills</p>
                </DirectionAwareHover1>

                <div className="text-sm p-0 sm:p-5 order-2">
                  <p>
                    {"Meghalaya, with its rich archaeological history, has long been of interest to researchers. Human habitation in the region dates back to the Neolithic period, with ancient sites discovered in the Khasi and Garo Hills. The practice of jhum or shifting cultivation, still common in the area, hints at the agricultural traditions of these early settlers. The region's highland plateaus, blessed with fertile soil and abundant rainfall, provided an ideal environment for human settlement and possibly even the domestication of rice. According to the theory of archaeologist Ian Glover, Northeast India, including Meghalaya, could be the birthplace of domesticated rice, given its extraordinary diversity of rice species."}
                  </p>
                </div>

                <div className="text-sm p-0 sm:p-5 flex flex-col gap-3 justify-center order-4 sm:order-3">
                  <p>
                    {"Meghalaya's historical significance is further enriched by its connection to early Islamic history. After the Conquest of Taraf in 1304, Shah Arifin Rafiuddin, a disciple of Shah Jalal, brought Islamic teachings to the Khasi and Jaintia Hills, where his khanqah remains to this day near the Bangladesh border."}
                  </p>
                  <p>
                    {"The region's importance is also evident in the Bhaitbari archaeological site, where remnants of a fortified city, dating from the 4th to 8th century AD, were uncovered. Thought to be a capital city of the Kamarupa kingdom, this site underscores Meghalaya's ancient ties to regional power structures."}
                  </p>
                </div>

                <DirectionAwareHover1 imageUrl='/Kamarupa.webp' className='h-full border rounded-lg order-3 sm:order-4'>
                  <p className="font-bold text-xl">Kamarupa Kingdom</p>
                  <p className="font-normal text-sm">Kamarupa from 350 to 1140 CE</p>
                </DirectionAwareHover1>

                <DirectionAwareHover1 imageUrl='/shillong-before-1897.webp' className='h-full rounded-lg border order-5'>
                  <p className="font-bold text-xl">Shillong, Meghalaya </p>
                  <p className="font-normal text-sm">Before year 1897</p>
                </DirectionAwareHover1>

                <div className="text-sm p-0 sm:p-5 flex flex-col gap-3 order-6">
                  <p>
                    {"Under British colonial rule, Meghalaya's distinct tribal kingdoms—Khasi, Garo, and Jaintia—were brought under British administration in the 19th century and later merged with Assam. It wasn't until the partition of Bengal in 1905 and subsequent political changes that the region saw shifts in governance. By 1921, much of present-day Meghalaya was declared part of India's 'backward tracts,' with limited autonomy."}
                  </p>
                  <p>
                    {"The modern state of Meghalaya emerged after a prolonged movement for autonomy, which began in the 1960s. Following the Assam Reorganisation (Meghalaya) Act of 1969, the autonomous state was officially established. Full statehood was granted in 1972, making Meghalaya an independent state with its own legislative assembly, solidifying its unique identity in India's northeastern landscape."}
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="culture">
              <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-5 py-3">

                <DirectionAwareHover1 imageUrl='/culture1.webp' className='h-full border rounded-lg order-1'>
                  <p className="font-bold text-xl">Tribe Statues</p>
                  <p className="font-normal text-sm">Don Bosco Museum, Shillong, Meghalaya</p>
                </DirectionAwareHover1>

                <div className="text-sm p-0 sm:p-5 order-2">
                  <p>
                    {"Meghalaya is home to one of the world's last surviving matrilineal societies, where lineage and inheritance are passed through women. In the Khasi, Jaintia, and Garo tribes, the youngest daughter traditionally inherits all the family property and takes on the responsibility of caring for aging parents and unmarried siblings. Known as the Khun Khatduh among the Khasi and Jaintia, or nokna among the Garo, these women are the heads of their households. In cases where no daughters exist, families may adopt a girl or appoint a daughter-in-law to inherit and continue the family lineage, preserving this unique cultural system."}
                  </p>
                </div>

                <div className="text-sm p-0 sm:p-5 flex flex-col gap-3 justify-center order-4 sm:order-3">
                  <p>
                    {"Meghalaya's civil society is a vibrant network of over 181 non-governmental organizations (NGOs), community associations, and foundations that serve the public's interests. These groups often represent the state's diverse ethnic communities, with organizations like the Khasi Students' Union (KSU), Jaintia Students' Union (JSU), and Garo Students' Union (GSU) advocating for the rights and interests of their respective groups. Civil society in Meghalaya also includes philanthropic efforts aimed at improving public health and community welfare. However, scholars debate its effectiveness, as civil society is often constrained by both government policies, like the Armed Forces Special Powers Act (AFSPA), and local insurgent activities, complicating its role in regional development and peacebuilding. Despite these challenges, civil society remains a crucial platform for community engagement and empowerment in Meghalaya."}
                  </p>
                </div>

                <DirectionAwareHover1 imageUrl='/union.webp' className='h-full border rounded-lg order-3 sm:order-4'>
                  <p className="font-bold text-xl">Khasi, Garo and Jaintia Student Union</p>
                  <p className="font-normal text-sm">Meghalaya</p>
                </DirectionAwareHover1>

              </div>
            </TabsContent>
            <TabsContent value="transport">
              <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-5 py-3">

                <DirectionAwareHover1 imageUrl='/meghalaya-road.webp' className='h-full border rounded-lg order-1'>
                  <p className="font-bold text-xl">Map of Meghalaya</p>
                  <p className="font-normal text-sm">meghalaya.gov.in/maps</p>
                </DirectionAwareHover1>

                <div className="text-sm p-0 sm:p-5 order-2">
                  <p>
                    {"The partition of India in 1947 left the Northeastern region, including Meghalaya, with severe infrastructural challenges, as only 2% of its perimeter connects with the rest of the country. Linked by a narrow stretch of land known as the Siliguri Corridor or Chicken's Neck, Meghalaya is a landlocked state relying heavily on road transport. While Shillong, the capital, has relatively good connectivity, much of the state still struggles with poor road infrastructure, with many areas remaining remote and inaccessible. When Meghalaya became an autonomous state in 1972, it inherited just 2,786 km of roads, including 174 km of National Highways. By 2011, the road network had expanded to over 9,350 km, yet the road density of 41.69 km per 100 square kilometers remains below the national average. Efforts are underway to improve and upgrade the state's roads and bridges, led by the Meghalaya Public Works Department."}
                  </p>
                </div>

                <div className="text-sm p-0 sm:p-5 flex flex-col gap-3 justify-center order-4 sm:order-3">
                  <p>
                    {"Shillong, the capital of Meghalaya, is served by the Umroi Airport, located 30 kilometers from the city along the Guwahati-Shillong highway. In 2011, a new terminal was inaugurated at a cost of ₹30 crore (US$3.6 million), with Air India Regional operating flights to Kolkata. Additionally, a helicopter service connects Shillong with Guwahati and Tura, enhancing regional connectivity. Baljek Airport near Tura became operational in 2008, and the Airports Authority of India (AAI) is working to upgrade it for ATR 42/72 aircraft. Guwahati’s Borjhar Airport, about 124 kilometers away, is another key airport for travelers to and from Shillong."}
                  </p>
                </div>

                <DirectionAwareHover1 imageUrl='/shillong-airport.webp' className='h-full border rounded-lg order-3 sm:order-4'>
                  <p className="font-bold text-xl">Shillong Airport</p>
                  <p className="font-normal text-sm">Shillong, Meghalaya</p>
                </DirectionAwareHover1>

              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Page