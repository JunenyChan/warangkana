"use client";

import Image from "next/image";
import { useState } from "react";

interface Work {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  event: string;
  image: string;
  details: string[];
}

export default function Home() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  const works = [
    {
      id: 1,
      title: "เครื่องไล่นกเอี้ยงในชุมชน",
      subtitle: "นวัตกรรมซอฟต์แวร์และสมองกลฝังตัว",
      description: "ได้รับรางวัลชมเชยระดับเหรียญทองแดง ในการประกวดสิ่งประดิษฐ์ประเภทที่ 6 ซึ่งเป็นสิ่งประดิษฐ์ด้านนวัตกรรมซอฟต์แวร์และสมองกลฝังตัว",
      event: "สุดยอดนวัตกรรมอาชีวศึกษา (18-19 พฤศจิกายน 2562)",
      image: "/works/work1.jpg",
      details: [
        "พัฒนาระบบควบคุมอัตโนมัติสำหรับไล่นกเอี้ยงในพื้นที่การเกษตร",
        "ใช้เทคโนโลยีเซ็นเซอร์ตรวจจับการเคลื่อนไหวและระบบเสียง",
        "ควบคุมผ่านไมโครคอนโทรลเลอร์ Arduino",
        "ช่วยลดความเสียหายของผลผลิตทางการเกษตรในชุมชน"
      ]
    },
    {
      id: 2,
      title: "บริจาค IOT",
      subtitle: "ชุดควบคุมด้วย IoT เพื่อชุมชน",
      description: "ได้รับรางวัลรองชนะเลิศอันดับ 2 ระดับเหรียญทองแดง ในการประกวดสิ่งประดิษฐ์ประเภทที่ 9 สิ่งประดิษฐ์ประเภทกำหนดโจทย์ ชุดควบคุมด้วยเครือข่ายอินเทอร์เน็ตเพื่อชุมชน (Internet Of Things)",
      event: "สุดยอดนวัตกรรมอาชีวศึกษา จังหวัดลำปาง (18-19 พฤศจิกายน 2562)",
      image: "/works/work2.jpg",
      details: [
        "พัฒนาระบบบริจาคอัจฉริยะด้วยเทคโนโลยี IoT",
        "ระบบสามารถติดตามและรายงานสถานะการบริจาคแบบเรียลไทม์",
        "ใช้เทคโนโลยีเซ็นเซอร์และการเชื่อมต่อผ่านอินเทอร์เน็ต",
        "ช่วยอำนวยความสะดวกในการจัดการการบริจาคในชุมชน"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 ">
      {/* Navbar - Fixed and Modern */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Warangkana Jeeaey
            </a>
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                <li><a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-600 hover:text-purple-600 transition-colors">Skills</a></li>
                <li><a href="#experience" className="text-gray-600 hover:text-purple-600 transition-colors">Experience</a></li>
                <li><a href="#works" className="text-gray-600 hover:text-purple-600 transition-colors">Works</a></li>
                <li><a href="#certificates" className="text-gray-600 hover:text-purple-600 transition-colors">Certificates</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <main className="container-sm mx-auto px-4">
        {/* Hero Section */}
        <div className="pt-16"></div> {/* Spacer for fixed navbar */}

        {/* About */}
        <section id="about" className="min-h-screen bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25"></div>
                  <Image 
                    src="/profile.jpg" 
                    alt="Profile" 
                    width={300} 
                    height={300} 
                    className="relative rounded-full shadow-xl border-4 border-white"
                  />
                </div>
              </div>
              <div className="lg:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  About me
                </h1>
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                    <h2 className="text-2xl font-semibold text-purple-700 mb-4">สวัสดีค่ะ 👋</h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p className="indent-8">
                        ดิฉัน <span className="font-medium text-purple-700">นางสาววรางคณา จี๋เอ้ย</span> ชื่อเล่น &quot;<span className="font-medium text-pink-600">จูน</span>&quot; ปัจจุบันกำลังศึกษาอยู่ชั้นปีที่ 2 (เทียบโอน) สาขาเทคโนโลยีสารสนเทศ ด้วยความสนใจอย่างลึกซึ้งในด้านเทคโนโลยีดิจิทัลและการพัฒนาโปรแกรม ดิฉันมุ่งมั่นที่จะเรียนรู้และพัฒนาทักษะด้านนี้อย่างเต็มที่ เพื่อเตรียมความพร้อมสำหรับการทำโปรเจกต์หรือการทำงานในอนาคต
                      </p>
                      <p className="indent-8">
                        ดิฉันสนใจเป็นพิเศษในเทคโนโลยี <span className="font-medium text-purple-700">Internet of Things (IoT)</span> เพราะมองว่าเป็นเทคโนโลยีที่สามารถนำมาประยุกต์ใช้ในการพัฒนาชีวิตประจำวันและสังคมได้จริง นอกจากนี้ยังมีความสามารถในการใช้งานไมโครคอนโทรลเลอร์ เช่น <span className="font-medium text-pink-600">Arduino</span> รวมถึงความเข้าใจพื้นฐานด้านอุปกรณ์อิเล็กทรอนิกส์
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                    <h2 className="text-2xl font-semibold text-purple-700 mb-4">Hello! 👋</h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p className="indent-8">
                        My name is <span className="font-medium text-purple-700">Warangkana Jeeaey</span>, or &quot;<span className="font-medium text-pink-600">June</span>&quot;. I am currently a second-year student (credit transfer) majoring in Information Technology. With a strong passion for digital technology and software development, I am committed to continuously learning and improving my skills to prepare myself for future projects and career opportunities.
                      </p>
                      <p className="indent-8">
                        I have a particular interest in <span className="font-medium text-purple-700">Internet of Things (IoT)</span> technology, as I believe it can be applied to improve daily life and society in meaningful ways. I also have hands-on experience working with microcontrollers such as <span className="font-medium text-pink-600">Arduino</span>, along with a solid understanding of basic electronics.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-600">🎂</span>
                        <span className="text-gray-700">10 พฤษภาคม 2542 (อายุ 26 ปี)</span>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-600">🙏</span>
                        <span className="text-gray-700">ศาสนาพุทธ</span>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-600">🏳️</span>
                        <span className="text-gray-700">สัญชาติไทย</span>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-600">📏</span>
                        <span className="text-gray-700">ส่วนสูง 161 ซม. / น้ำหนัก 48 กก.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Computer Skills */}
        <section id="skills" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Computer Skills</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Programming Languages */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-6">Programming Languages</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">Python</span>
                        <span className="text-gray-500 text-sm">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">JavaScript / TypeScript</span>
                        <span className="text-gray-500 text-sm">Intermediate</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">C/C++</span>
                        <span className="text-gray-500 text-sm">Intermediate</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{width: '70%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">Arduino</span>
                        <span className="text-gray-500 text-sm">Intermediate</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tools & Frameworks */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-6">Tools & Frameworks</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">React / Next.js</span>
                        <span className="text-gray-500 text-sm">Intermediate</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">Tailwind CSS</span>
                        <span className="text-gray-500 text-sm">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">IoT & Embedded Systems</span>
                        <span className="text-gray-500 text-sm">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">Database (SQL, MongoDB)</span>
                        <span className="text-gray-500 text-sm">Intermediate</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{width: '70%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Skills */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-purple-700 mb-6">Other Skills</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-purple-600">💻 Software</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Microsoft Office (Word, Excel, PowerPoint)</li>
                      <li>• Adobe Creative Suite (Photoshop, Illustrator)</li>
                      <li>• Figma (UI/UX Design)</li>
                      <li>• Git & GitHub</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-purple-600">🌐 Other Competencies</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Problem Solving & Troubleshooting</li>
                      <li>• Team Collaboration</li>
                      <li>• Technical Documentation</li>
                      <li>• IoT Project Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-purple-700 mb-4">ประสบการณ์การทำงาน 💼</h2>
                <div className="space-y-6 text-gray-600">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-purple-700">1. ผู้ช่วยธุรการ – ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร (อำเภอแม่ทะ) | ปี 2560</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>พิมพ์และบันทึกข้อมูลของผู้มาใช้บริการ</li>
                      <li>ให้ความช่วยเหลือเมื่อคอมพิวเตอร์มีปัญหาขัดข้อง</li>
                      <li>สนับสนุนการทำงานของเจ้าหน้าที่ด้านงานธุรการ</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-purple-700">2. ผู้ช่วยช่าง – บริษัท ทูลนิก จำกัด (อำเภอเมืองลำปาง) | ปี 2562</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>ตรวจสอบและซ่อมแซมระบบคอมพิวเตอร์ของหน่วยงานต่าง ๆ</li>
                      <li>ปฏิบัติงานทั้งในจังหวัดลำปางและต่างจังหวัด</li>
                      <li>เรียนรู้การแก้ไขปัญหาด้านฮาร์ดแวร์และซอฟต์แวร์</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-purple-700">3. เจ้าหน้าที่รับคำร้อง – บริษัท ทาเลส ดีไอเอส จำกัด | ปี 2563 - 2564</h3>
                    <p className="text-sm text-purple-600 mb-2">(ร่วมงานกับกรมการกงสุล กระทรวงการต่างประเทศ)</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>ตรวจสอบความถูกต้องของเอกสารและข้อมูลส่วนบุคคล</li>
                      <li>ให้คำแนะนำเกี่ยวกับขั้นตอนการดำเนินการทำหนังสือเดินทาง</li>
                      <li>บันทึกข้อมูลเข้าสู่ระบบทะเบียนหนังสือเดินทาง</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-purple-700 mb-4">Work Experience 💼</h2>
                <div className="space-y-6 text-gray-600">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-purple-700">1. Administrative Assistant – BAAC (Mae Tha District) | 2017</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Typed and recorded customer service data</li>
                      <li>Provided assistance when computer systems encountered issues</li>
                      <li>Supported administrative tasks for the branch office</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-purple-700">2. Technical Assistant – Toolnic Co., Ltd. (Mueang Lampang) | 2019</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Inspected and repaired computer systems for various organizations</li>
                      <li>Worked both within Lampang Province and in other provinces</li>
                      <li>Gained practical skills in troubleshooting hardware and software problems</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-purple-700">3. Application Officer – Thales DIS Co., Ltd. | 2020 - 2021</h3>
                    <p className="text-sm text-purple-600 mb-2">(In collaboration with the Department of Consular Affairs, Ministry of Foreign Affairs)</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Verified the accuracy of documents and personal data of applicants</li>
                      <li>Provided guidance on the passport application process</li>
                      <li>Recorded applicant information into the passport registration system</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Works */}
        <section id="works" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">My Works</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
              {works.map((work) => (
                <div key={work.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                  <div className="relative">
                    <Image 
                      src={work.image}
                      alt={work.title}
                      width={400} 
                      height={250}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-semibold">{work.title}</h3>
                        <p className="text-sm opacity-90">{work.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-purple-700 mb-4">{work.title}</h3>
                    <p className="text-gray-600 mb-6">{work.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="mr-2">🏆</span>
                      <span>{work.event}</span>
                    </div>
                    <button 
                      onClick={() => handleWorkClick(work)}
                      className="w-full px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      ดูรายละเอียด
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal for work details */}
        {selectedWork && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-purple-700">{selectedWork.title}</h3>
                  <button 
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="relative h-full mb-6">
                  <Image 
                    src={selectedWork.image}
                    alt={selectedWork.title}
                    fill
                    className=" rounded-lg object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 mb-2">รายละเอียดโครงการ</h4>
                    <p className="text-gray-600 mb-4">{selectedWork.description}</p>
                    <h4 className="font-semibold text-purple-700 mb-2">Project Description</h4>
                    <p className="text-gray-600">
                      {selectedWork.id === 1 
                        ? "Ms. Warangkana Jeeaey from Lampang Technical College received a commendation award with a bronze medal. The award was for an invention in Category 6, which is for software innovation and embedded systems. The invention is named 'Myna bird repelling machine in the community'. The competition was called 'VEC THAILAND' and 'Outstanding Vocational Innovation'."
                        : "Ms. Warangkana Jeeaey from Lampang Technical College received the second runner-up award with a bronze medal in Category 9. The invention was a specific-task-based invention, a control set using the Internet of Things (IoT) for the community. The project was named 'Donate IOT'. The competition was the 'Outstanding Vocational Innovation' at the provincial level in Lampang."}
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded-lg p-4">
                    <h4 className="font-semibold text-pink-700 mb-2">ประเด็นสำคัญ</h4>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      {selectedWork.details.map((detail, index) => (
                        <li key={index} className="text-gray-600">{detail}</li>
                      ))}
                    </ul>
                    <h4 className="font-semibold text-pink-700 mb-2">Key Features</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedWork.id === 1 ? [
                        "Developed an automated control system for repelling myna birds in agricultural areas",
                        "Utilized motion sensor technology and sound systems",
                        "Controlled through Arduino microcontroller",
                        "Helped reduce crop damage in the community"
                      ].map((detail, index) => (
                        <li key={index} className="text-gray-600">{detail}</li>
                      )) : [
                        "Developed a smart donation system using IoT technology",
                        "Real-time donation status tracking and reporting system",
                        "Integrated sensor technology with internet connectivity",
                        "Streamlined donation management in the community"
                      ].map((detail, index) => (
                        <li key={index} className="text-gray-600">{detail}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">🏆</span>
                    <span>{selectedWork.event}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certificates */}
        <section id="certificates" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Certificates</h2>
            <div className="grid md:grid-cols-2 gap-12 lg:grid-cols-3">
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <Image 
                  src="/certificates/cert1.jpg"
                  alt="Google Applications Certificate"
                  width={400} 
                  height={300}
                  className="w-full   object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">การเพิ่มประสิทธิภาพการทำงานด้วย Google Applications</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">ผ่านการฝึกทักษะออนไลน์เกี่ยวกับการทำงานร่วมกันผ่านเครือข่ายอินเทอร์เน็ตโดยใช้ Google Applications</p>
                    <p className="text-sm text-gray-500">Duration: 3.30 hours</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">🏆</span>
                      <span>Issued by Department of Skill Development</span>
                    </div>
                    <div className="text-sm text-purple-600">August 25, 2024</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <Image 
                  src="/certificates/cert2.jpg"
                  alt="UX/UI Design Certificate"
                  width={400} 
                  height={300}
                  className="w-full  object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">การออกแบบ UX/UI</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">ผ่านการฝึกอบรมออนไลน์หลักสูตรการออกแบบประสบการณ์ผู้ใช้และส่วนติดต่อผู้ใช้</p>
                    <p className="text-sm text-gray-500">Duration: 8 hours 30 minutes</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">🏆</span>
                      <span>Collaboration of DSD, DDF, and ATSI</span>
                    </div>
                    <div className="text-sm text-purple-600">October 1, 2024</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <Image 
                  src="/certificates/cert3.jpg"
                  alt="IT Exit Exam Certificate"
                  width={400} 
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">IT Exit Exam</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">ผ่านการทดสอบมาตรฐานด้านเทคโนโลยีสารสนเทศสำหรับนักศึกษาชั้นปีจบ</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">🏆</span>
                      <span>RMUTL Chiang Mai</span>
                    </div>
                    <div className="text-sm text-purple-600">Academic Year 2025</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <Image 
                  src="/certificates/cer4.jpg"
                  alt="Certificate 4"
                  width={400} 
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Certificate 4</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">Description for certificate 4</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">🏆</span>
                      <span>Issuing Organization</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <Image 
                  src="/certificates/cer5.jpg"
                  alt="Certificate 5"
                  width={400} 
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Certificate 5</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">Description for certificate 5</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">🏆</span>
                      <span>Issuing Organization</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Certificate 5</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">Description for certificate 5</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">🏆</span>
                      <span>Issuing Organization</span>
                    </div>
                  </div>
                </div>

              </div>

              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <Image 
                  src="/certificates/cer6.jpg"
                  alt="Certificate 6"
                  width={400} 
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Certificate 6</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">Description for certificate 6</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">🏆</span>
                      <span>Issuing Organization</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <Image 
                  src="/certificates/cer7.jpg"
                  alt="Certificate 7"
                  width={400} 
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Certificate 7</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">Description for certificate 7</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">🏆</span>
                      <span>Issuing Organization</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <Image 
                  src="/certificates/cer8.jpg"
                  alt="Certificate 8"
                  width={400} 
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Certificate 8</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">Description for certificate 8</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">🏆</span>
                      <span>Issuing Organization</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <Image 
                  src="/certificates/cer9.jpg"
                  alt="Certificate 9"
                  width={400} 
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Certificate 9</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">Description for certificate 9</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">🏆</span>
                      <span>Issuing Organization</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Contact</h2>
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
                    <p className="text-gray-600">093-645-6064</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                    <p className="text-gray-600">warangkana_je67@live.rmutl.ac.th</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">Address</h3>
                    <p className="text-gray-600">159 Moo 1, Huasuea Sub-district, Mae Tha District, Lampang Province 52150</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
