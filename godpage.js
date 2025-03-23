// Handle Get Prediction Button
document.getElementById('getPrediction').addEventListener('click', function() {
    const countdownElement = document.getElementById('countdown');
    document.getElementById('timer').style.display = 'block';
    
    let timeLeft = 12;
    countdownElement.textContent = timeLeft;
  
    const timerInterval = setInterval(() => {
      timeLeft--;
      countdownElement.textContent = timeLeft;
  
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').style.display = 'none';
        
        // Display prediction result
        const prediction = "Hyderabad will win!";
        document.getElementById('predictionResult').textContent = prediction;
        document.getElementById('result').style.display = 'block';
      }
    }, 1000);
  });
  
  // Handle Why Button
  document.getElementById('whyButton').addEventListener('click', function() {
    const analysis = `Hyderabad has demonstrated exceptional performance in their recent matches, securing an impressive 70% win rate over their last ten games. This consistent track record reflects their strong form and ability to maintain dominance on the field. In contrast, Rajasthan has faced challenges in their recent outings, managing to win only 30% of their matches. This disparity in success rates highlights Hyderabad's superiority in terms of both strategy and execution.

Adding to Hyderabad’s advantage is their formidable offensive lineup, known for delivering powerful performances under pressure. Their key players have consistently showcased remarkable skills, capitalizing on scoring opportunities and applying relentless pressure on their opponents. Furthermore, Hyderabad will enjoy the home-field advantage, which often plays a crucial role in high-stakes encounters. The familiarity with the pitch conditions, the support of their passionate fans, and the psychological edge of playing on their own turf significantly bolster their confidence.

On the other hand, Rajasthan will need to overcome these hurdles by addressing their weaknesses and formulating a solid game plan. To stand a chance, they must improve their defensive strategies, enhance team coordination, and seize any opportunities that come their way. While the odds may lean heavily in Hyderabad's favor, cricket is a game full of surprises, and Rajasthan could still rise to the occasion with determination and resilience.

Ultimately, with Hyderabad's strong offensive form, consistent winning streak, and the undeniable support of their home crowd, they are well-positioned to secure another victory. Rajasthan will have to bring their absolute best to challenge Hyderabad’s dominance and turn the tides in their favor. The upcoming match promises an exciting showdown, with both teams fighting for glory on the grand stage of the IPL.`;

    document.getElementById('analysisText').textContent = analysis;
    document.getElementById('analysis').style.display = 'block';
  });
  