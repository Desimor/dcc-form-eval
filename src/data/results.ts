export type ResultKey = 'discovery' | 'dependence' | 'development' | 'direction'

export interface ResultCategory {
  key: ResultKey
  title: string
  description: string
  description2: string
  description3: string
}

// Descriptions are placeholders pending copy for each category.
export const resultCategories: ResultCategory[] = [
  { 
    key: 'discovery', 
    title: 'Discovery', 
    description: "If you scored a 41-50 on the Discovery statements, you have a good understanding of the meaning of salvation and the sacrifice that Jesus Christ made for your sins. Continue to share your story of salvation with others. Please read Romans 10:14-15.",
    description2: "If you scored a 31-40 on the Discovery statements, please take the time to read the following scriptures: Romans 3:23-24; John 3:16; John 14:6; Romans 10:13-15; Matthew 28:19; Luke 15:7; Luke 15:10; 2 Corinthians 5:17.",
    description3: "If you scored below a 30 on the Discovery statements, we strongly suggest that you set up an appointment with a pastoral staff member. We would love to help you grow in this area. We also suggest that you read the scriptures listed above prior to the meeting."
  },
  { 
    key: 'dependence', 
    title: 'Dependence', 
    description: "If you scored a 41-50 on the Dependence statements, you are actively connected in relationships with other believers that will last throughout eternity. Continue to help others to connect with their church family. Please read Hebrews 10:24-25.",
    description2: "If you scored a 31-40 on the Dependence statements, please take the time to read the following scriptures: Ecclesiastes 4:9-12; Hebrews 10:24-25; Galatians 6:2; John 15:13; Proverbs 12:26; Proverbs 27:17",
    description3: "If you scored below a 30 on the Dependence statements, we strongly suggest that you set up an appointment with a pastoral staff memeber. We would love to help you grow in this area. We also suggest that you read the scriptures listed above prior to the meeting."
  },
  { 
    key: 'development', 
    title: 'Development', 
    description: "If you scored a 41-50 on the Development statements, you have made proactive decisions to grow and to become discipled in God's Word. Never become content with your walk. Always strive to become more like Christ. Please read Romans 12:2.",
    description2: "If you scored a 31-40 on the Development statements, please take the time to read the following scriptures: Psalm 119:105; Psalm 119:11; Proverbs 19:20; Proverbs 19:27; Roamns 12:2; Timothy 3:16-17; 1 Peter 1:23",
    description3: "If you scored below a 30 on the Development statements, we strongly suggest that you set up an appointment with a pastoral staff member. We would love to help you grow in this area. We also suggest that you read the scriptures listed above prior to the meeting."
  },
  { 
    key: 'direction', 
    title: 'Direction', 
    description: 'If you scored 41-50 on the Direction statements, you are most likely invovled in some form of servanthood. The selfless giving of your time, talent and treasure are a blessing to the Kingdom of God. Continue serviing and remember that the rewards are out of this world. Please read 1 Peter 4:10.',
    description2: 'If you scored 31-40 on the Direction statements, please take the time to read the following scriptures: Jeremiah 29:11; Philippians 2:5-8; Mark 10:35-45; John 13:1-15; 1 Peter 4:10',
    description3: 'If you scored below a 30 on the Direction statements, we strongly suggest that you set up an appointment with a pastoral staff member. We would love to help you grow in this area. We also suggest that you read the scriptures listed above prior to the meeting.'
  },
]
