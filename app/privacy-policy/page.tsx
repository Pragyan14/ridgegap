'use client';

// ── Shared style constants ──
const paragraphClass = 'text-gray-700 text-[15px] leading-relaxed';
const headingClass   = 'text-xl font-bold text-[#1e3a8a] mt-4 mb-1';

// ── Reusable components ──
function Paragraph({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <p className={`${paragraphClass} ${className}`}>{children}</p>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h3 className={headingClass}>{children}</h3>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className={`list-disc list-inside ${paragraphClass} space-y-0.5`}>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

function GdprRight({ title, desc }: { title: string; desc: string }) {
  return (
    <Paragraph>
      <span className="font-semibold">{title}</span> – {desc}
    </Paragraph>
  );
}

// ── Data ──
const usageList = [
  'Provide, operate, and maintain our website',
  'Improve, personalize, and expand our website',
  'Understand and analyse how you use our website',
  'Develop new products, services, features, and functionality',
  'Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes',
  'Send you emails',
  'Find and prevent fraud',
];

const gdprRights = [
  { title: 'The right to access',              desc: 'You have the right to request copies of your personal data. We may charge you a small fee for this service.' },
  { title: 'The right to rectification',        desc: 'You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.' },
  { title: 'The right to erasure',              desc: 'You have the right to request that we erase your personal data, under certain conditions.' },
  { title: 'The right to restrict processing',  desc: 'You have the right to request that we restrict the processing of your personal data, under certain conditions.' },
  { title: 'The right to object to processing', desc: 'You have the right to object to our processing of your personal data, under certain conditions.' },
  { title: 'The right to data portability',     desc: 'You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.' },
];

// ── Page ──
export default function ContactsPage() {
  return (
    <div>

      {/* Hero Section */}
      <section className="relative w-full bg-linear-to-r from-[#00d2ff] via-[#7165e3] to-[#ed1aff] text-white py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Privacy Policy
            </h2>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-10 md:py-14 bg-[#eef2ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-3">
            Privacy Policy for Ridgegap Solutions PVT. LTD.
          </h2>

          <Paragraph>
            At www.ridgegap.com, accessible from www.ridgegap.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by www.ridgegap.com and how we use it.
          </Paragraph>
          <Paragraph>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regard to the information that they shared and/or collect in www.ridgegap.com. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Free Privacy Policy Generator.
          </Paragraph>

          <SectionHeading>Consent</SectionHeading>
          <Paragraph>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </Paragraph>

          <SectionHeading>Information we collect</SectionHeading>
          <Paragraph>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
          </Paragraph>

          <SectionHeading>How we use your information</SectionHeading>
          <Paragraph className="mb-1">
            We use the information we collect in various ways, including to:
          </Paragraph>
          <BulletList items={usageList} />

          <SectionHeading>Log Files</SectionHeading>
          <Paragraph>
            www.ridgegap.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analysing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
          </Paragraph>

          <SectionHeading>Cookies and Web Beacons</SectionHeading>
          <Paragraph>
            Like any other website, www.ridgegap.com uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </Paragraph>

          <SectionHeading>Google DoubleClick DART Cookie</SectionHeading>
          <Paragraph>
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL –{' '}
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-[#1e3a8a] underline">
              https://policies.google.com/technologies/ads
            </a>
          </Paragraph>

          <SectionHeading>Advertising Partners Privacy Policies</SectionHeading>
          <Paragraph>
            You may consult this list to find the Privacy Policy for each of the advertising partners of www.ridgegap.com.
          </Paragraph>
          <Paragraph>
            Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on www.ridgegap.com, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
          </Paragraph>
          <Paragraph>
            Note that www.ridgegap.com has no access to or control over these cookies that are used by third party advertisers.
          </Paragraph>

          <SectionHeading>Third Party Privacy Policies</SectionHeading>
          <Paragraph>
            www.ridgegap.com's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </Paragraph>
          <Paragraph>
            You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
          </Paragraph>

          <SectionHeading>CCPA Privacy Rights (Do Not Sell My Personal Information)</SectionHeading>
          <Paragraph>Under the CCPA, among other rights, California consumers have the right to:</Paragraph>
          <Paragraph>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</Paragraph>
          <Paragraph>Request that a business delete any personal data about the consumer that a business has collected.</Paragraph>
          <Paragraph>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</Paragraph>
          <Paragraph>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</Paragraph>

          <SectionHeading>GDPR Data Protection Rights</SectionHeading>
          <Paragraph>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</Paragraph>
          {gdprRights.map((r, i) => <GdprRight key={i} title={r.title} desc={r.desc} />)}
          <Paragraph>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</Paragraph>

          <SectionHeading>Children's Information</SectionHeading>
          <Paragraph>
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
          </Paragraph>
          <Paragraph className="pb-4">
            www.ridgegap.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately, and we will do our best efforts to promptly remove such information from our records.
          </Paragraph>

        </div>
      </section>
    </div>
  );
}