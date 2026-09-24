export const questions: string[] = [
  'I believe that the acceptance of Jesus Christ in my life is the only way to heaven.',
  'I enjoy spending time with other believers.',
  'I believe that the Bible is the inspired Word of God.',
  'I support missions on a regular basis.',
  'I believe that every person has sinned and comes short of the glory of God.',
  'I have other Christians in my life that I go to for advice.',
  'I attend a mid-week Bible Study.',
  "I am actively pursuing God's plan for my life.",
  "I believe that repentance is necessary for the forgiveness of sins.",
  "I believe that my Christian relationships help me maintain a healthy relationship with Christ.",
  "I read the Bible daily.",
  "I volunteer for community outreach events.",
  "I feel that I am growing stronger in my walk with Christ daily.",
  "I regularly attend social gatherings at my church.",
  "I pray before making major decisions.",
  "I know, understand and want to be a part of the vision for my local church.",
  "I believe that Jesus Christ is the Son of God.",
  "I have built relationships with other Christian believers who share my common interests.",
  "I am present to hear at least three out of four Sunday sermons that the pastor preaches.",
  "I am actively involved in a ministry team at my local church.",
  "I believe that jesus Christ has forgiven me of all of my sin.",
  "I regularly have dinner, coffee, etc. with other believers.",
  "I use the Biblical knowledge I possess to aid in my decision making.",
  "I have desire to help those less fortunate than I am.",
  "I believe that I have sinned.",
  "I believe it is important for me to celebrate with other believers.",
  "I participate in an age appropriate mid-week Bible Study.",
  "I know what God's plan is for my life.",
  "I believe that Jesus died for my sins and rose from the grave.",
  "I have a spiritual mentor in my life.",
  "I regularly receive relevant knowledge from the Bible.",
  "I consistently give financially to the local ministry.",
  "I believe that through Christ, I have eternal life.",
  "I regularly help fellow Christian believers through difficult times or trying circumstances.",
  "I spend time in personal prayer daily.",
  "I know my spiritual gifting.",
  "I can see a significant change in my life post salvation.",
  "I believe that my Christian relationships will last for eternity.",
  "I have a hunger for God's Word.",
  "I have found a place in my local church to serve."
]

export const QUESTION_COUNT = questions.length

export interface LikertOption {
  value: number
  label: string
}

export const likertOptions: LikertOption[] = [
  { value: 0, label: 'Strongly Disagree' },
  { value: 1, label: 'Disagree' },
  { value: 2, label: 'Somewhat Disagree' },
  { value: 3, label: 'Somewhat Agree' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' },
]
