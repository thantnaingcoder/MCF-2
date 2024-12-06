import React from 'react'
import PageLayout from '../components/PageLayout'

const PrivacyPolicyPage = () => {
  return (
    <div className=' h-auto  mb-5 md:mb-40'>
        <div className="   w-full bg-[#A4F4C5] h-[300px] md:h-[400px] lg:h-[600px]  max-h-[750px]  flex items-center justify-center">
        <div className="  font-heading text-[32px] md:text-[56px]   font-bold ">
        Privacy & Policy
        </div>
      </div>

      <PageLayout>
          <div className=' mt-10 mx-6 flex flex-col gap-5'>
              <div>
                  <HeadingComponent heading="Effective Date: [November 1,  2024]" />
                  <NormalText text="Welcome to Pathway Academy! Your privacy is critically important to us. This Privacy Policy explains how we collect, use, share, and safeguard your personal information when you visit our website or use our services. By accessing or using our platform, you agree to the practices outlined in this policy." />
              </div>

              <div>
                  <HeadingComponent heading="1. Information We Collect" />
                  <NormalText text="We collect personal information (name, email, phone, billing details, account info) and non-personal data (browser type, IP address, device info, usage data). We do not intentionally collect sensitive data like health or political beliefs" />
              </div>

              <div>
                  <HeadingComponent heading="2. How We Collect Your Information" />
                  <ListComponent listArray={[
                    "Directly from You: When you register, complete a profile, enroll in courses, or contact us.",
                    "Automatically: Through cookies, analytics, and tracking technologies as you interact with our website.",
                    "From Third Parties: Such as payment processors, social media platforms, or affiliate partners"
                    
                  ]} />
              </div>

              <div>
                  <HeadingComponent heading="3. How We Use Your Information" />
                  <ListComponent listArray={[
                    "Account Management: To register you, manage your profile, and provide course access.",  
                    "Service Delivery: To deliver content, track progress, and issue certificates.",
                    "Payments: To securely process transactions and handle refunds",
                    "Communication: To send course updates, newsletters, and promotional offers.",
                    "Platform Improvement: To analyze usage and improve our services.",
                    "Legal Compliance: To comply with legal requirements, resolve disputes, and enforce terms."
                  ]} />
              </div>

              <div>
                  <HeadingComponent heading="4. Sharing Your Information" />
                  <NormalText text="We do not sell your personal data. However, we may share it with:" />
                  <ListComponent listArray={[
                    "Service Providers: For payment processing, communication, and analytics.",
                    "Legal Compliance: To comply with laws or legal processes.",
                    "Business Transfers: If Pathway Academy merges or transfers its business, your data may be shared with the new owner." ]} />
              </div>

              <div>
                  <HeadingComponent heading="5. Cookies and Tracking Technologies" />
                  <NormalText text="We use cookies to enhance your experience, including:" />
                  <ListComponent listArray={[
                    "Essential Cookies: Necessary for functionality.",
                    "Performance Cookies: For tracking website usage.",
                    "Advertising: To serve you relevant ads.",
                  ]} />
                  <NormalText text="You can manage cookies through your browser settings, though disabling them may affect website performance." />
              </div>

              <div>
                  <HeadingComponent heading="6. Your Rights" />
                  <NormalText text="If you have any questions or concerns about our privacy policy, please contact us at [email address]." />
                  <ListComponent listArray={[
                    "Right to Access: You have the right to request a copy of your personal information.",
                    "Right to Rectification: You have the right to request corrections to your personal information.",
                    "Right to Erasure: You have the right to request the deletion of your personal information.",
                    "Right to Restriction: You have the right to request a restriction on our use of your personal information.",
                    "Right to Object: You have the right to object to our use of your personal information for certain purposes.",
                  ]} />
                  <NormalText text="Please note that we may need to verify your identity before responding to your request." />
              </div>

              <div>
                <HeadingComponent heading="7. Changes to This Privacy Policy" />
                <NormalText text="We reserve the right to update or modify this privacy policy as needed. We will notify you of any changes by posting the updated policy on our website." />
              </div>

              <div>
                <HeadingComponent heading="8. Your Rights" />
                <NormalText text="Depending on your location, you may have the following rights:" />
                <ListComponent listArray={[
                  " Access: You have the right to request a copy of your personal information.",
                  " Rectification: You have the right to request corrections to your personal information.",
                  " Erasure: You have the right to request the deletion of your personal information.",
                  " Restriction: You have the right to request a restriction on our use of your personal information.",
                  " Object: You have the right to object to our use of your personal information for certain purposes.",
                  
                ]} />
                
              </div>


              <div>
                <HeadingComponent heading="9. Children’s Privacy" />
                <NormalText text="Pathway Academy is for users aged 13 and older. We do not knowingly collect information from children under 13. If we discover we have unintentionally collected such data, we will delete it immediately." />
              </div>

              <div>
                <HeadingComponent heading="10. Third-Party Links" />
                <NormalText text="Our website may contain links to third-party sites. We are not responsible for their privacy practices and encourage you to review their policies." />
              </div>

              <div>
                <HeadingComponent heading="11. Changes to This Privacy Policy" />
                <NormalText text="We may update this Privacy Policy periodically. Changes will be posted on this page, and we encourage you to review it regularly to stay informed." />
              </div>

              <div>
                <HeadingComponent heading="12. Contact Us" />
                <NormalText text="If you have any questions or concerns about our privacy policy, please contact us at [email address]." />
                <ListComponent listArray={[
                  "Email: [support@pathway67@gmail.com]",
                  "Phone: +1 (555) 123-4567",
                  "Mailing Address: 123 Pathway Lane, Springfield, IL 62701, USA"  
                ]} />
              </div>

              <div>
                <NormalText text="This Privacy Policy provides an overview of how Pathway Academy collects, uses, and protects your data, and how you can exercise your rights regarding it." />
              </div>
               
          </div>
      </PageLayout>
    </div>
  )
}

export default PrivacyPolicyPage

const ListComponent = ({listArray}) => {
  return (
    <ul className=' list-disc list-outside '>
      {listArray.map((item, index) => (
        <li className=' text-justify text-[#525252] font-sans md:text-[20px] md:leading-[30px] ' key={index}>{item}</li>
      ))}
    </ul>
  )
}

const HeadingComponent = ({heading}) => {
  return (
    <h1 className=' -ms-5 text-justify font-sans text-[18px] md:text-[25px] md:leading-[32px] text-[#525252] mb-5 font-semibold '>{heading}</h1>
  )
}

const NormalText = ({text}) => {
  return (
    <p className='-ms-5 text-justify text-[#525252] font-sans md:text-[20px] md:leading-[30px] '>{text}</p>
  )
}