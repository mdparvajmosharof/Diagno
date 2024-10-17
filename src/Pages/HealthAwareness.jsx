import { useEffect, useState } from 'react';
import Footer from '../Component/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HealthAwareness = () => {
  const [openArticleIndex, setOpenArticleIndex] = useState(null);

  // Health Tips Data Array
  const healthTips = [
    {
      title: "Stay Hydrated",
      description:
        "Drinking enough water daily helps maintain balance in bodily fluids and supports digestion, circulation, and other essential functions.",
      recommendation: "Try to drink at least 8 glasses of water daily, and more during physical activities.",
      link: "https://www.cdc.gov/nutrition/data-statistics/plain-water-the-healthier-choice.html",
    },
    {
      title: "Balanced Diet",
      description:
        "A balanced diet rich in vegetables, fruits, and lean proteins is essential for good health.",
      recommendation: "Include a variety of food groups and avoid processed foods as much as possible.",
      link: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
    },
    {
      title: "Exercise Regularly",
      description:
        "Regular physical activity helps maintain a healthy weight, improves mood, and reduces the risk of chronic diseases.",
      recommendation: "Aim for at least 30 minutes of moderate exercise, such as walking, on most days of the week.",
      link: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
    },
    // Add more health tips here...
  ];

  // Articles Data Array
  const articles = [
    {
      title: "Healthy Eating for Heart Health",
      content:
        "Good nutrition is one of the keys to a healthy life. You can improve your health by keeping a balanced diet. Make sure to get the right nutrients, and always try to limit your intake of unhealthy fats and sugars. \n\nA heart-healthy diet emphasizes plant-based foods like fruits, vegetables, whole grains, legumes, and nuts. Reducing red meat and processed foods can improve overall heart health and lower the risk of heart disease.",
      tips: [
        "Limit your salt intake to reduce blood pressure.",
        "Consume more omega-3 rich foods like fish and flaxseeds.",
        "Avoid trans fats found in processed snacks and fast food.",
      ],
      recommendations: [
        "Plan your meals around heart-healthy ingredients.",
        "Maintain regular physical activity to keep your heart strong.",
        "Keep a close eye on cholesterol and blood pressure levels.",
      ],
      link: "https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)",
    },
    {
      title: "Mental Health: Managing Stress",
      content:
        "Mental health is just as important as physical health. Managing stress is crucial for overall well-being. Stress can lead to mental and physical issues if left unchecked. Learning to manage it can improve your quality of life. \n\nEngaging in mindfulness exercises, deep breathing, or even seeking professional counseling can help you manage stress. Prioritizing self-care and sleep also plays an important role in keeping mental health in check.",
      tips: [
        "Engage in daily mindfulness exercises like meditation.",
        "Make sure to get enough sleep to support mental clarity.",
        "Seek professional help if stress becomes overwhelming.",
      ],
      recommendations: [
        "Create a work-life balance to avoid burnout.",
        "Exercise regularly to release tension and boost mood.",
        "Talk to friends or loved ones for emotional support.",
      ],
      link: "https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response",
    },
    {
      title: "The Importance of Staying Hydrated",
      content:
        "Water is essential for life, and staying properly hydrated is critical for your body’s everyday functions. Hydration affects everything from brain function to joint mobility. Dehydration, even in mild forms, can result in fatigue, headaches, and impaired concentration. \n\nConsistently drinking water throughout the day helps maintain energy levels and supports the body's detoxification process. It is especially important to stay hydrated during physical activity and in hot weather.",
      tips: [
        "Aim to drink at least 8 glasses of water each day.",
        "Avoid sugary beverages and opt for water or herbal teas.",
        "Carry a water bottle with you to maintain hydration.",
      ],
      recommendations: [
        "Drink water before, during, and after exercise.",
        "Consume fruits and vegetables with high water content like cucumbers and watermelon.",
        "Avoid caffeine and alcohol as they can lead to dehydration.",
      ],
      link: "https://www.cdc.gov/nutrition/data-statistics/plain-water-the-healthier-choice.html",
    },
    {
      title: "Boosting Immunity Through Nutrition",
      content:
        "Your immune system defends your body against infections and diseases. Boosting it can help you stay healthy and recover faster from illnesses. A balanced diet rich in vitamins and minerals, such as vitamin C, zinc, and antioxidants, can support immune health. \n\nIncorporating immune-boosting foods like citrus fruits, garlic, and ginger into your daily diet can help keep your immune system functioning effectively.",
      tips: [
        "Include vitamin C-rich foods like oranges, bell peppers, and broccoli in your diet.",
        "Add garlic and ginger to meals for their immune-boosting properties.",
        "Eat a variety of fruits and vegetables to ensure you're getting essential nutrients.",
      ],
      recommendations: [
        "Maintain a balanced diet to support overall immune function.",
        "Get adequate sleep to allow your immune system to repair and restore.",
        "Consider taking vitamin supplements if needed after consulting a doctor.",
      ],
      link: "https://www.who.int/news-room/fact-sheets/detail/immunity-and-immunization",
    },
    {
      title: "Sleep and Its Impact on Health",
      content:
        "Sleep is a vital component of your overall health and well-being. A good night’s sleep can enhance mood, improve cognitive function, and support your immune system. Chronic sleep deprivation, on the other hand, can lead to a number of health issues, including obesity, heart disease, and diabetes. \n\nEnsuring you get 7-9 hours of quality sleep each night will help your body recover and maintain energy levels throughout the day.",
      tips: [
        "Maintain a consistent sleep schedule by going to bed and waking up at the same time every day.",
        "Create a calming bedtime routine to signal your body that it’s time to wind down.",
        "Avoid screens at least an hour before bedtime to reduce blue light exposure.",
      ],
      recommendations: [
        "Ensure your bedroom is dark, quiet, and at a comfortable temperature.",
        "Limit caffeine intake, especially in the afternoon and evening.",
        "Engage in relaxation techniques like reading or deep breathing before bed.",
      ],
      link: "https://www.sleepfoundation.org/how-sleep-works/how-much-sleep-do-we-really-need",
    },
    {
      title: "Preventing Diabetes Through Lifestyle Changes",
      content:
        "Diabetes is a chronic condition that affects how your body turns food into energy. Preventing diabetes involves adopting healthy lifestyle habits like maintaining a healthy weight, eating a balanced diet, and exercising regularly. \n\nReducing sugar and processed food intake, along with staying physically active, can lower the risk of developing type 2 diabetes. Monitoring blood sugar levels is also important for those at higher risk.",
      tips: [
        "Maintain a balanced diet with limited refined sugars and processed foods.",
        "Exercise regularly, aiming for at least 30 minutes of moderate activity each day.",
        "Monitor your blood sugar levels if you're at risk or have been diagnosed with prediabetes.",
      ],
      recommendations: [
        "Consult with a healthcare provider to develop a personalized plan to manage your blood sugar.",
        "Incorporate more fiber-rich foods like whole grains and legumes into your diet.",
        "Maintain a healthy weight through diet and exercise to reduce the risk of diabetes.",
      ],
      link: "https://www.who.int/news-room/fact-sheets/detail/diabetes",
    },
    
    // Add more articles here...
  ];

  useEffect(()=>{
    AOS.init({
      duration: 1500,
      delay: 300
    });
  },[])

  const animation = ['fade-down-right','fade-down',"fade-down-left", "flip-right", 'zoom-in', 'flip-left',"fade-up-right", 'fade-up',"fade-up-left"]
  // Function to toggle article content visibility
  const toggleArticle = (index) => {
    if (openArticleIndex === index) {
      setOpenArticleIndex(null); // Collapse if clicked again
    } else {
      setOpenArticleIndex(index); // Expand the selected article
    }
  };

  return (
    <div className="mt-10">
      {/* Health Tips Section */}
      <h2 className="text-2xl text-center font-bold text-indigo-600 dark:text-indigo-300 mb-6">
        Recent Health Tips
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {healthTips.map((tip, index) => (
          <div
            key={index}
            data-aos={`${animation[index]}`}
            className="card bg-base-100 shadow-lg border border-indigo-200 dark:border-gray-600"
          >
            <div className="card-body">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                {tip.title}
              </h3>
              <p>{tip.description}</p>
              <p className="mt-2">
                <strong>Recommendation:</strong> {tip.recommendation}
              </p>
              <a
                href={tip.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 underline"
              >
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Articles Section */}
      <h2 className="text-2xl text-center font-bold text-indigo-800 dark:text-indigo-500 mt-12 mb-6">
        Featured Health Articles
      </h2>
      <div className="space-y-6">
        {articles.map((article, index) => (
          <div
            key={index}
            data-aos={`${animation[index % animation.length]}`}
            className="bg-white dark:bg-gray-800 shadow-lg border border-indigo-200 dark:border-gray-600 rounded-lg p-4"
          >
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={() => toggleArticle(index)}
            >
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                {article.title}
              </h3>
              {/* Dropdown Icon */}
              <span className="text-indigo-600 dark:text-indigo-300">
                {openArticleIndex === index ? '▲' : '▼'}
              </span>
            </div>
            {openArticleIndex === index && (
              <div className="mt-4" data-aos='fade-up' data-aos-delay="0">
                <p className="text-gray-700 dark:text-gray-300">
                  {article.content}
                </p>
                <ul className="list-disc list-inside mt-2">
                  {article.tips.map((tip, tipIndex) => (
                    <li key={tipIndex}>{tip}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <strong>Recommendations:</strong>
                  <ul className="list-disc list-inside">
                    {article.recommendations.map((rec, recIndex) => (
                      <li key={recIndex}>{rec}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 underline mt-2 block"
                >
                  Learn more
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default HealthAwareness;
