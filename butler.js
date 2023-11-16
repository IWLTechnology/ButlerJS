function init(stage){
  switch(stage){
    case 1:
      if (!createjs.Sound.initializeDefaultPlugins()) {
        updateStatus('sound', 'bad', "Error loading sound - the library could not be found.");
      } else {
        try{
          createjs.Sound.addEventListener("fileload", playSound);
          createjs.Sound.alternateExtensions = ["mp3"];
            createjs.Sound.registerSounds(
              [ {id: 'au-yes-q', src: 'voices/au/yes-q.mp3'},
           {id: 'au-lights', src: 'voices/au/lights.mp3'},
           {id: 'au-on', src: 'voices/au/on.mp3'},
           {id: 'au-off', src: 'voices/au/off.mp3'},
           {id: 'au-yes', src: 'voices/au/yes.mp3'},
           {id: 'au-no', src: 'voices/au/no.mp3'},
           {id: 'au-okay', src: 'voices/au/okay.mp3'},
           {id: 'au-sure', src: 'voices/au/sure.mp3'},
           {id: 'au-fan', src: 'voices/au/fan.mp3'},
           {id: 'au-party', src: 'voices/au/party.mp3'},
           {id: 'au-light', src: 'voices/au/light.mp3'},
           {id: 'au-auto', src: 'voices/au/auto.mp3'},
           {id: 'au-manual', src: 'voices/au/manual.mp3'},
           {id: 'au-please', src: 'voices/au/please.mp3'},
           {id: 'au-as-you-wish', src: 'voices/au/as-you-wish.mp3'},
           {id: 'au-as-you-wish-sir', src: 'voices/au/as-you-wish-sir.mp3'},
           {id: 'au-as-you-wish-sir-e', src: 'voices/au/as-you-wish-sir-e.mp3'},
           {id: 'au-as-you-wish-master-e', src: 'voices/au/as-you-wish-master-e.mp3'},
           {id: 'au-as-you-wish-master', src: 'voices/au/as-you-wish-master.mp3'},
           {id: 'au-please-sign-in', src: 'voices/au/please-sign-in.mp3'},
           {id: 'au-sir', src: 'voices/au/sir.mp3'},
           {id: 'au-master', src: 'voices/au/master.mp3'},
           {id: 'au-please-sign-in-e', src: 'voices/au/please-sign-in-e.mp3'},
           {id: 'au-access-denied-e', src: 'voices/au/access-denied-e.mp3'},
           {id: 'au-playing', src: 'voices/au/playing.mp3'},
           {id: 'au-paused', src: 'voices/au/paused.mp3'},
           {id: 'au-next', src: 'voices/au/next.mp3'},
           {id: 'au-song', src: 'voices/au/song.mp3'},
           {id: 'au-previous', src: 'voices/au/previous.mp3'},
           {id: 'au-youtube', src: 'voices/au/youtube.mp3'},
           {id: 'au-playlist', src: 'voices/au/playlist.mp3'},
           {id: 'au-saved', src: 'voices/au/saved.mp3'},
           {id: 'au-settings', src: 'voices/au/settings.mp3'},
           {id: 'au-cancel', src: 'voices/au/cancel.mp3'},
           {id: 'au-preset', src: 'voices/au/preset.mp3'},
           {id: 'au-active', src: 'voices/au/active.mp3'},
           {id: 'au-inactive', src: 'voices/au/inactive.mp3'},
           {id: 'au-enabled', src: 'voices/au/enabled.mp3'},
           {id: 'au-disabled', src: 'voices/au/disabled.mp3'},
           {id: 'au-may-i', src: 'voices/au/may-i.mp3'},{id: 'us-yes-q', src: 'voices/us/yes-q.mp3'},
          {id: 'us-lights', src: 'voices/us/lights.mp3'},
          {id: 'us-on', src: 'voices/us/on.mp3'},
          {id: 'us-off', src: 'voices/us/off.mp3'},
          {id: 'us-yes', src: 'voices/us/yes.mp3'},
          {id: 'us-no', src: 'voices/us/no.mp3'},
          {id: 'us-okay', src: 'voices/us/okay.mp3'},
          {id: 'us-sure', src: 'voices/us/sure.mp3'},
          {id: 'us-fan', src: 'voices/us/fan.mp3'},
          {id: 'us-party', src: 'voices/us/party.mp3'},
          {id: 'us-light', src: 'voices/us/light.mp3'},
          {id: 'us-auto', src: 'voices/us/auto.mp3'},
          {id: 'us-manual', src: 'voices/us/manual.mp3'},
          {id: 'us-please', src: 'voices/us/please.mp3'},
          {id: 'us-as-you-wish', src: 'voices/us/as-you-wish.mp3'},
          {id: 'us-as-you-wish-sir', src: 'voices/us/as-you-wish-sir.mp3'},
          {id: 'us-as-you-wish-sir-e', src: 'voices/us/as-you-wish-sir-e.mp3'},
          {id: 'us-as-you-wish-master-e', src: 'voices/us/as-you-wish-master-e.mp3'},
          {id: 'us-as-you-wish-master', src: 'voices/us/as-you-wish-master.mp3'},
          {id: 'us-please-sign-in', src: 'voices/us/please-sign-in.mp3'},
          {id: 'us-sir', src: 'voices/us/sir.mp3'},
          {id: 'us-master', src: 'voices/us/master.mp3'},
          {id: 'us-please-sign-in-e', src: 'voices/us/please-sign-in-e.mp3'},
          {id: 'us-access-denied-e', src: 'voices/us/access-denied-e.mp3'},
          {id: 'us-playing', src: 'voices/us/playing.mp3'},
          {id: 'us-paused', src: 'voices/us/paused.mp3'},
          {id: 'us-next', src: 'voices/us/next.mp3'},
          {id: 'us-song', src: 'voices/us/song.mp3'},
          {id: 'us-previous', src: 'voices/us/previous.mp3'},
          {id: 'us-youtube', src: 'voices/us/youtube.mp3'},
          {id: 'us-playlist', src: 'voices/us/playlist.mp3'},
          {id: 'us-saved', src: 'voices/us/saved.mp3'},
          {id: 'us-settings', src: 'voices/us/settings.mp3'},
          {id: 'us-cancel', src: 'voices/us/cancel.mp3'},
          {id: 'us-preset', src: 'voices/us/preset.mp3'},
          {id: 'us-active', src: 'voices/us/active.mp3'},
          {id: 'us-inactive', src: 'voices/us/inactive.mp3'},
          {id: 'us-enabled', src: 'voices/us/enabled.mp3'},
          {id: 'us-disabled', src: 'voices/us/disabled.mp3'},
          {id: 'us-may-i', src: 'voices/us/may-i.mp3'},{id: 'uk-yes-q', src: 'voices/uk/yes-q.mp3'},
          {id: 'uk-lights', src: 'voices/uk/lights.mp3'},
          {id: 'uk-on', src: 'voices/uk/on.mp3'},
          {id: 'uk-off', src: 'voices/uk/off.mp3'},
          {id: 'uk-yes', src: 'voices/uk/yes.mp3'},
          {id: 'uk-no', src: 'voices/uk/no.mp3'},
          {id: 'uk-okay', src: 'voices/uk/okay.mp3'},
          {id: 'uk-sure', src: 'voices/uk/sure.mp3'},
          {id: 'uk-fan', src: 'voices/uk/fan.mp3'},
          {id: 'uk-party', src: 'voices/uk/party.mp3'},
          {id: 'uk-light', src: 'voices/uk/light.mp3'},
          {id: 'uk-auto', src: 'voices/uk/auto.mp3'},
          {id: 'uk-manual', src: 'voices/uk/manual.mp3'},
          {id: 'uk-please', src: 'voices/uk/please.mp3'},
          {id: 'uk-as-you-wish', src: 'voices/uk/as-you-wish.mp3'},
          {id: 'uk-as-you-wish-sir', src: 'voices/uk/as-you-wish-sir.mp3'},
          {id: 'uk-as-you-wish-sir-e', src: 'voices/uk/as-you-wish-sir-e.mp3'},
          {id: 'uk-as-you-wish-master-e', src: 'voices/uk/as-you-wish-master-e.mp3'},
          {id: 'uk-as-you-wish-master', src: 'voices/uk/as-you-wish-master.mp3'},
          {id: 'uk-please-sign-in', src: 'voices/uk/please-sign-in.mp3'},
          {id: 'uk-sir', src: 'voices/uk/sir.mp3'},
          {id: 'uk-master', src: 'voices/uk/master.mp3'},
          {id: 'uk-please-sign-in-e', src: 'voices/uk/please-sign-in-e.mp3'},
          {id: 'uk-access-denied-e', src: 'voices/uk/access-denied-e.mp3'},
          {id: 'uk-playing', src: 'voices/uk/playing.mp3'},
          {id: 'uk-paused', src: 'voices/uk/paused.mp3'},
          {id: 'uk-next', src: 'voices/uk/next.mp3'},
          {id: 'uk-song', src: 'voices/uk/song.mp3'},
          {id: 'uk-previous', src: 'voices/uk/previous.mp3'},
          {id: 'uk-youtube', src: 'voices/uk/youtube.mp3'},
          {id: 'uk-playlist', src: 'voices/uk/playlist.mp3'},
          {id: 'uk-saved', src: 'voices/uk/saved.mp3'},
          {id: 'uk-settings', src: 'voices/uk/settings.mp3'},
          {id: 'uk-cancel', src: 'voices/uk/cancel.mp3'},
          {id: 'uk-preset', src: 'voices/uk/preset.mp3'},
          {id: 'uk-active', src: 'voices/uk/active.mp3'},
          {id: 'uk-inactive', src: 'voices/uk/inactive.mp3'},
          {id: 'uk-enabled', src: 'voices/uk/enabled.mp3'},
          {id: 'uk-disabled', src: 'voices/uk/disabled.mp3'},
          {id: 'uk-may-i', src: 'voices/uk/may-i.mp3'} ],
            "/");
        }
        catch(err){
          updateStatus('sound', 'bad', err);
        }
      }
      break;
    case 2:
      updateStatus('sound', 'good', 'Sound preload complete.');
      var cookieMax = parseInt(getCookie('nOfPresets'))
      if(cookieMax == 0){
        updateStatus('presets', 'good', 'No presets to load.');
        init(3);
      }
      break;
    case 3:
      updateStatus('speech-to-text', 'good', 'Listening');
      stt()
      break;
  }
}

function stt() {
    var action = document.getElementById("action");
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
        recognition.onstart = function() {
            action.innerHTML = "<small>listening, please speak...</small>";
        };
        recognition.onspeechend = function() {
            action.innerHTML = "<small>stopped listening, hope you are done...</small>";
            recognition.stop();
        };
        recognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript;
            var confidence = event.results[0][0].confidence;
          processSpeech(transcript);
        };
         recognition.start();
  }

function processSpeech(input) {
  const checks = ['hey Butler','hi'];
  const speech = ['yes?', 'Hello!'];
  const pins = [null, null];
  const results = [];
  for(var i = 0; i < checks.length-1; i++){
    if(input.search(checks[i]) != -1){
      results.pop(1);
    }else{
      results.pop(0);
    }
  }

  
  stt()
}

function playSound(ev) {
  console.log("Preloaded:", ev.id, ev.src);
  document.getElementById('status-sound-bar').value = parseInt(document.getElementById('status-sound-bar').value) + 1 + "";
  if(ev.id == 'uk-may-i'){
    init(2);
  }
}

function presetsLoaded(ev) {
  console.log("Preloaded preset", ev.name);
  document.getElementById('status-presets-bar').value = parseInt(document.getElementById('status-presets-bar').value) + 1 + "";
}

function speak(toSpeak){
  var lang = document.getElementById('language').value;
  createjs.Sound.play(lang + '-' + toSpeak);
}

function updateStatus(section, status, message){
  var icon = document.getElementById('status-' + section + '-icon');
  icon.classList = "fa-solid fa-ellipsis fa-fade fa-2xl";
  icon.style.color = "#4D5656";
  if(status  == 'good'){
    icon.classList = "fa-solid fa-check fa-beat fa-2xl";
    icon.style.color = "#00ff00";
  }else if(status == 'bad'){
    icon.classList = "fa-solid fa-circle-xmark fa-shake fa-2xl";
    icon.style.color = "#ff0000";
  }
  document.getElementById('status-' + section + '-message').innerHTML = message;
if(status == 'good'){
  var sc = icon.style.color;
  var cl = "";
  for(var j = 0; j < icon.classList.length; j++){
    cl += icon.classList[j] + ' ';
  }
  cl = icon.classList;
  var mess = document.getElementById('status-' + section + '-message').innerHTML;
  document.getElementById('status-' + section).innerHTML = `<span id="status-${section}-icon" class="${cl}" style="color: ${sc};"></span>&nbsp;&nbsp;<span id="status-${section}-message">${mess}</span>`;
  }
}

function initStatuses(){
  var box = document.getElementById("statuses");
  var sChecks = ['sound', 'presets', 'speech-to-text'];
  var sRanges = [120];
  var hasProgress  = [true, true, false]
  sRanges.push(parseInt(getCookie('nOfPresets')));
  for(var i = 0; i < sChecks.length; i++){
    var temp_section = sChecks[i];
    var mx = sRanges[i];
    if(hasProgress[i]){
      var prog = `<progress id="status-${temp_section}-bar" value="-1" max="${mx}"> Waiting </progress>`
    }else{
      var prog = `<span>(No status update)</span>`
    }
    box.innerHTML += `<p id="status-${temp_section}"><span id="status-${temp_section}-icon"></span>&nbsp;&nbsp;<span id="status-${temp_section}-message"></span>&nbsp;&nbsp;${prog}</p>`;
    updateStatus(temp_section, '', 'Initialising ' + temp_section + '...');
  }
  init(1)
}

function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }else{
      if(cname == 'nOfPresets'){
        return '0';
      }
    }
  }
  return "";
}

function runTest(num){
  switch(num){
    case 0://js
      updateStatus('javascript', 'good', 'Javasript enabled.');
      runTest(1);
      break;
    case 1://cookies
      setCookie('test', '1');
      if(getCookie('test') == '1'){
        updateStatus('cookies', 'good', 'Cookies enabled.');
        runTest(2);
      }else{
        updateStatus('cookies', 'bad', 'Cookies disabled. Please enable then reload.');
      }
      break;
    case 2://microphone
    navigator.permissions.query({name:'microphone'}).then(function(result) {
       if (result.state == 'granted') {
         updateStatus('microphone', 'good', 'Microphone enabled.');
         runTest(3);
       } else if (result.state == 'denied') {
         updateStatus('microphone', 'bad', 'Please enable the microphone permanently then reload.');
       }
      });
      break;
    case 3://notifications
      if (!window.Notification) {
         updateStatus('notifications', 'bad', 'Browser does not support notifications.');
      } else {
          // check if permission is already granted
          if (Notification.permission === 'granted') {
              updateStatus('notifications', 'good', 'Notifications allowed.');
            runTest(4);
          } else {
              // request permission from user
              Notification.requestPermission().then(function (p) {
                  if (p === 'granted') {
                      updateStatus('notifications', 'good', 'Notifications allowed.');
                
                    runTest(4);
                  } else {
                    updateStatus('notifications', 'bad', 'User blocked notifications.');
                  }
              }).catch(function (err) {
                  console.error(err);
              });
          }
      }
      break;
    case 4://finished
      initStatuses()
      break;
  }
}

function message(title, message) {
    if (!window.Notification) {
        alert('Browser does not support notifications.');
    } else {
        // check if permission is already granted
        if (Notification.permission === 'granted') {
            // show notification here
            var notify = new Notification(title, {
                body: message,
                icon: 'https://cdn.glitch.global/7fa50741-117a-440b-9131-6b9e1e32b36c/Logo-Plug-WhiteBG.png?v=1686796219050',
            });
        } else {
            // request permission from user
            Notification.requestPermission().then(function (p) {
                if (p === 'granted') {
                    // show notification here
                    var notify = new Notification(title, {
                body: message,
                icon: 'https://cdn.glitch.global/7fa50741-117a-440b-9131-6b9e1e32b36c/Logo-Plug-WhiteBG.png?v=1686796219050',
            });
                } else {
                    alert('User blocked notifications.');
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }
}