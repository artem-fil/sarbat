$(function(){
  var anchor = $('#anchor-animate-skills'),
      drtn = 1200,
      inited = false;

  anchor.appear({ force_process: true });

  anchor.on('appear', function() {
    if (!inited) {

      $('.counter').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: drtn,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });

      $('#skill-photoshop').circleProgress({
        value: 0.7,
        size: 150,
        animation: { duration: drtn },
        startAngle: Math.PI / 4 * 2,
        fill: {
          gradient: ["#f3c500", "#ff5601"], gradientAngle: Math.PI / 4
        }
      });

      $('#skill-fireworks').circleProgress({
        value: 0.9,
        size: 150,
        animation: { duration: drtn },
        startAngle: Math.PI / 4 * 2,
        fill: {
          gradient: ["#f3c500", "#ff5601"], gradientAngle: Math.PI / 6
        }
      });

      $('#skill-HTML').circleProgress({
        value: 0.6,
        size: 150,
        animation: { duration: drtn },
        startAngle: Math.PI / 4 * 2,
        fill: {
          gradient: ["#f3c500", "#ff5601"], gradientAngle: Math.PI / 4
        }
      });

      $('#skill-WordPress').circleProgress({
        value: 0.4,
        size: 150,
        animation: { duration: drtn },
        startAngle: Math.PI / 4 * 2,
        fill: {
          gradient: ["#f3c500", "#ff5601"], gradientAngle: Math.PI / 2
        }
      });

      inited = true;
    }
  });
})
