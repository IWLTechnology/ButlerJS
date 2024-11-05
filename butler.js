function preloadSound(){
    if (!createjs.Sound.initializeDefaultPlugins()) {
          butlerjs.updateStatus('sound', 'bad', "Error loading sound - the library could not be found.");
        } else {
          try{
            createjs.Sound.addEventListener("fileload", butlerjs.playSound);
            createjs.Sound.alternateExtensions = ["mp3"];
              createjs.Sound.registerSounds(
                [ {id: 'au-yes-q', src: 'voices/au/yes-q.mp3'},
             {id: 'au-lights', src: 'voices/au/lights.mp3'},
             {id: 'au-on', src: 'voices/au/on.mp3'},
              {id: 'au-say-again-q', src: 'voices/au/say-again-q.mp3'},
                 {id: 'uk-say-again-q', src: 'voices/uk/say-again-q.mp3'},
                 {id: 'us-say-again-q', src: 'voices/us/say-again-q.mp3'},
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
                {id: 'uk-rr', src: 'rr.mp3'},
                 {id: 'us-rr', src: 'rr.mp3'},
                 {id: 'au-rr', src: 'rr.mp3'},
                {id: 'uk-indiana', src: 'indiana.mp3'},
                 {id: 'us-indiana', src: 'indiana.mp3'},
                 {id: 'au-indiana', src: 'indiana.mp3'},
                 {id: 'uk-may-i', src: 'voices/uk/may-i.mp3'}
               ],
              "/");
          }
          catch(err){
            butlerjs.updateStatus('sound', 'bad', err);
          }
        }
}

var butlerjs = {
  fromCookie:"",
  checks:"",
  speech:"",
  pins:"",
  javaexec:"",
  init() {
    /*document.body.innerHTML = ``;*/
    document.getElementById('secondStage').style.display = 'none';
    document.getElementById('firstStage').style.display = 'block';
    setInterval(function(){
      butlerjs.queue('play', '');
    }, 200);
  },
  start() {
    document.getElementById('firstStage').style.display = 'none';
    butlerjs.runTest(0);
  },
  runTest(num){
    switch(num){
      case 0:
        butlerjs.updateStatus('javascript', 'good', 'Javasript enabled.');
        document.getElementById('secondStage').style.display = 'block';
        document.getElementById('thirdStage').style.display = 'block';
        butlerjs.runTest(1);
        break;
      case 1:
        butlerjs.setCookie('test', '1');
        if(butlerjs.getCookie('test') == '1'){
          butlerjs.updateStatus('cookies', 'good', 'Cookies enabled.');
          butlerjs.runTest(2);
        }else{
          butlerjs.updateStatus('cookies', 'bad', 'Cookies disabled. Please enable then reload.');
        }
        break;
      case 2:
  navigator.permissions.query({name:'microphone'}).then(function(result) {
         if (result.state == 'granted') {
           butlerjs.updateStatus('microphone', 'good', 'Microphone enabled.');
           butlerjs.runTest(3);
         } else if (result.state == 'denied') {
           butlerjs.updateStatus('microphone', 'bad', 'Please enable the microphone permanently then reload.');
         }else{
           var wasanerror = 0;
           navigator.mediaDevices
             .getUserMedia({ video: false, audio: true })
             .then((stream) => {
               window.localStream = stream; // A
               if(wasanerror == 0){
                  butlerjs.updateStatus('microphone', 'good', 'Microphone enabled.');
                   butlerjs.runTest(3);
                }else{
                  butlerjs.updateStatus('microphone', 'bad', 'Please enable the microphone permanently then reload.');
                }
             })
             .catch((err) => {
               wasanerror = 1;
               if(wasanerror == 0){
                 butlerjs.updateStatus('microphone', 'good', 'Microphone enabled.');
                  butlerjs.runTest(3);
               }else{
                 butlerjs.updateStatus('microphone', 'bad', 'Please enable the microphone permanently then reload.');
               }
             });
         }
        });
        break;
      case 3:
        butlerjs.initStatuses();
        break;
    }
  },
    getCookie(cname) {
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
    },
  setCookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },
  initStatuses(){
    var box = document.getElementById("statuses");
    var sChecks = ['sound', 'presets', 'speech-to-text'];
    var sRanges = [120, 4];
    var hasProgress  = [true, true, false];
    var prog = '';
    for(var i = 0; i < sChecks.length; i++){
      var temp_section = sChecks[i];
      var mx = sRanges[i];
      if(hasProgress[i]){
        prog = `<progress id="status-${temp_section}-bar" value="-1" max="${mx}"> Waiting </progress>`;
      }else{
        prog = `<span>(No status update)</span>`;
      }
      box.innerHTML += `<p id="status-${temp_section}"><span id="status-${temp_section}-icon"></span>&nbsp;&nbsp;<span id="status-${temp_section}-message"></span>&nbsp;&nbsp;${prog}</p>`;
      butlerjs.updateStatus(temp_section, '', 'Initialising ' + temp_section + '...');
    }
    butlerjs.beginIt(1);
  },
  beginIt(stage){
    switch(stage){
      case 1:
        preloadSound();
        break;
      case 2:
        butlerjs.updateStatus('sound', 'good', 'Sound preload complete.');
        document.getElementById('status-presets-message').innerHTML = "Loading commands...";
        fromCookie = butlerjs.getCookie('presetsCheck');
        if(fromCookie == '' || fromCookie == '0' || fromCookie == 0 || fromCookie == undefined || fromCookie.search('shut up,,cancel,never,hey Butler,lights on,lights off,fan on,fan off,March,stop all sound') == -1) {
          fromCookie = 'shut up,cancel,never,hey Butler,lights on,lights off,fan on,fan off,March,stop all sound';
          butlerjs.setCookie('presetsCheck', fromCookie, 365);
        }
        checks = fromCookie.split(',');
        document.getElementById('status-presets-bar').value = 1;
        document.getElementById('status-presets-message').innerHTML = "Loaded commands. Loading speech results...";
        fromCookie = butlerjs.getCookie('presetsSpeech');
        if(fromCookie == '' || fromCookie == '0' || fromCookie == 0 || fromCookie == undefined || fromCookie.search(',cancel,rr,yes-q,lights;on,lights;off,fan;on,fan;off,indiana,') == -1) {
          fromCookie = ',cancel,rr,yes-q,lights;on,lights;off,fan;on,fan;off,indiana,';
          butlerjs.setCookie('presetsSpeech', fromCookie, 365);
        }
        speech = fromCookie.split(',');
        document.getElementById('status-presets-bar').value = 2;
        document.getElementById('status-presets-message').innerHTML = "Loaded speech result. Loading pin outputs...";
        fromCookie = butlerjs.getCookie('presetsPins');
        if(fromCookie == '' || fromCookie == '0' || fromCookie == 0 || fromCookie == undefined || fromCookie.search(',,,,5-1,5-0,6-1,6-0,,') == -1) {
          fromCookie = ',,,,5-1,5-0,6-1,6-0,,';
          butlerjs.setCookie('presetsPins', fromCookie, 365);
        }
        pins = fromCookie.split(',');
        document.getElementById('status-presets-bar').value = 3;
        document.getElementById('status-presets-message').innerHTML = "Loaded pin outputs. Loading javascript execution...";
        fromCookie = butlerjs.getCookie('presetsJSExec');
        if(fromCookie == '' || fromCookie == '0' || fromCookie == 0 || fromCookie == undefined || fromCookie.search(",,,,alert('lightsOn'),,,,,createjs.Sound.stop();butlerjs.queue('clear','')") == -1) {
          fromCookie = ",,,,alert('lightsOn'),,,,,createjs.Sound.stop();butlerjs.queue('clear','')";
          butlerjs.setCookie('presetsJSExec', fromCookie, 365);
        }
        javaexec = fromCookie.split(',');
        document.getElementById('status-presets-bar').value = 4;
        butlerjs.updateStatus('presets', 'good', 'All presets loaded');
        butlerjs.beginIt(3);
        break;
      case 3:
        butlerjs.updateStatus('speech-to-text', 'good', 'Listening');
        butlerjs.stt();
        break;
    }
  },
  stt() {
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
      recognition.addEventListener("error", (event) => {
         action.innerHTML = "<small>Error (" + event + "), trying again...</small>";
        butlerjs.speak('say-again-q');
        butlerjs.stt();
      });
        recognition.onresult = function(event) {
            var res = [event.results[0][0].transcript, event.results[0][0].confidence];
          butlerjs.processSpeech(res[0]);
        };

      recognition.onnomatch = function(event) {
        action.innerHTML = "<small>Error (" + event + "), trying again...</small>";
        butlerjs.speak('say-again-q');
        butlerjs.stt();
    };

         recognition.start();
  },
  processSpeech(input) {
    const results = [];
    for(var i = 0; i < checks.length; i++){
      if(input.search(checks[i]) != -1){
        results.push(1);
      }else{
        results.push(0);
      }

    }
    console.log(results);
    if(results[0]){
      window.close();
      document.body.innerHTML = '';
      window.location.reload();
      window.location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }else{
    if(results[1]){
      document.getElementById('queried').innerHTML = '0';
      butlerjs.speak(speech[1]);
    }else if(results[2]){
      butlerjs.speak(speech[2]);
    }else{
      if(results[3] == 1){
        document.getElementById('queried').innerHTML = '1';
        butlerjs.speak(speech[3]);
      }else{
      if(document.getElementById('queried').innerHTML == '1'){
        for(var j = 0; j < results.length; j++){
          if(results[j] == 1){
            butlerjs.speak('as-you-wish-master-e');
            for(var k = 0; k < speech[j].split(';').length; k++){
              butlerjs.speak(speech[j].split(';')[k]);
            }
            for(var k = 0; k < pins[j].split(';').length; k++){
              butlerjs.pinOut(pins[j].split(';')[k]);
            }
            for(var k = 0; k < javaexec[j].split(';').length; k++){
              butlerjs.evaluate(javaexec[j].split(';')[k]);
            }
          }
        }
    }else{
        
      }
    }
    }
    }
    results.shift();
    results.shift();
    results.shift();
    results.shift();
    if(results.find(butlerjs.checkForTrue) != undefined){
      document.getElementById('queried').innerHTML = '0';
    }else{
      butlerjs.speak('say-again-q');
    }
    butlerjs.stt();
  },
  evaluate(toEval){
    var evalAllowed = butlerjs.getCookie('evalAllowed');
    if(evalAllowed == '' || evalAllowed == null){
      butlerjs.setCookie('evalAllowed', '1', 365);
      evalAllowed = '1';
    }
    if(evalAllowed == '1'){
      eval(toEval);
    }else{
      alert('Eval disabled');
    }
  },
  checkForTrue(obj){
    return obj == 1;
  },
  devel(){
    preloadSound();
    butlerjs.start();
    butlerjs.stt();
  },
  playSound(ev) {
    console.log("Preloaded:", ev.id, ev.src);
    document.getElementById('status-sound-bar').value = parseInt(document.getElementById('status-sound-bar').value) + 1 + "";
    if(ev.id == 'uk-may-i'){
      butlerjs.beginIt(2);
    }
  },
  pinOut(out) {
    var url = 'http://' + document.getElementById('ipadd').value + "/" + out;
    document.getElementById('framebox').innerHTML += `<iframe style="border-color: red; border-width: 20px;" src="${url}"></iframe>`;
  },
  presetsLoaded(ev) {
    console.log("Preloaded preset", ev.name);
    document.getElementById('status-presets-bar').value = parseInt(document.getElementById('status-presets-bar').value) + 1 + "";
  },
  speak(toSpeak){
    if(document.getElementById('playingSound').innerHTML == '1'){
      butlerjs.queue('add', toSpeak);
    }else{
      var lang = document.getElementById('language').value;
      var instance = createjs.Sound.play(lang + '-' + toSpeak);
      butlerjs.playInit();
      instance.on('complete', butlerjs.playFin);
      console.log('Attempting to speak ' + lang + '-' + toSpeak);
    }
  },
  queue(m, v){
    switch(m){
      case 'next':
        var y = document.getElementById('soundQueue').innerHTML.split(',');
        y.shift();
        console.log(y)
        document.getElementById('soundQueue').innerHTML = y;
        break;
      case 'clear':
        document.getElementById('soundQueue').innerHTML = '';
        break;
      case 'add':
        console.log(v);
        var x = document.getElementById('soundQueue').innerHTML.split(',')
        x.push(v);
        console.log(x);
        document.getElementById('soundQueue').innerHTML = x;
        break;
      case 'play': 
        if(document.getElementById('playingSound').innerHTML == '0'){
          if(document.getElementById('soundQueue').innerHTML.split(',')[0] != ''){
butlerjs.speak(document.getElementById('soundQueue').innerHTML.split(',')[0]);
        }else{

        }
        break;
    }
    }
  },
  playFin(){
    console.log('PLAY FINISHED');
    document.getElementById('playingSound').innerHTML = '0';
    butlerjs.queue('next', '');
  },
  playInit(){
    console.log('PLAY INIT');
    document.getElementById('playingSound').innerHTML = '1'; 
  },
  updateStatus(section, status, message){
    var icon = document.getElementById('status-' + section + '-icon');
    icon.classList = "fa-solid fa-ellipsis fa-fade fa-2xl waiting";
    if(status  == 'good'){
      icon.classList = "fa-solid fa-check fa-beat fa-2xl good";
    }else if(status == 'bad'){
      icon.classList = "fa-solid fa-circle-xmark fa-shake fa-2xl bad";
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
};