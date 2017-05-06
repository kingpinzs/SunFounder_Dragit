// SunFounder PiCar-V

modules.cloud = "2017-May-05"

SpriteMorph.prototype.loadPiCarVCategories = function(blocks, block, watcherToggle){
    blocks.push(block('picar_v_rw_run'));
    //blocks.push(block('picar_v_rw_stop'));
    blocks.push(block('picar_v_fw_turn'));
    blocks.push(block('picar_v_pan_turn'));
    blocks.push(block('picar_v_tilt_turn'));
    blocks.push('=');
    blocks.push(block('picar_v_servo_turn'));
    blocks.push(block('picar_v_pwm_output'));
    //blocks.push(watcherToggle('picar_v_get_analog'));
    blocks.push(block('picar_v_get_analog'));
    blocks.push(block('picar_v_get_digital'));
    blocks.push(block('picar_v_set_digital'));
    blocks.push(block('picar_v_calibrate'));
    blocks.push('=');
    blocks.push(block('picar_v_find_blob'));
    blocks.push(block('picar_v_get_blob'));

}

// PiCar-V
SpriteMorph.prototype.categories.push('PiCar_V')   // Add categories

SpriteMorph.prototype.blockColor.PiCar_V = new Color(188, 19, 57)    // Define category colors
/*
type:   command
        reporter
        predicate
        hat
        ring
 */

SpriteMorph.prototype.blocks.picar_v_rw_run = {    // Define blocks
    type: 'command',
    category: 'PiCar_V',
    spec: '[PiCar-V]  Rear wheel %br    channel: %sf_motor_dir %br    direction: %sf_rw_dir %br    speed: %n',
    defaults: ['both', 'forward', 0]
  }

SpriteMorph.prototype.blocks.picar_v_rw_stop = {
    type: 'command',
    category: 'PiCar_V',
    spec: '[PiCar-V]  Rear wheels %br    Stop'
  }

SpriteMorph.prototype.blocks.picar_v_fw_turn = {
    type: 'command',
    category: 'PiCar_V',
    spec: '[PiCar-V]  Front wheels %br    turn: %sf_fw_dir',
    defaults: ['straight']
  }

SpriteMorph.prototype.blocks.picar_v_pan_turn = {
    type: 'command',
    category: 'PiCar_V',
    spec: '[PiCar-V]  Pan servo %br    angle: %n',
    defaults: [0]
  }

SpriteMorph.prototype.blocks.picar_v_tilt_turn = {
    type: 'command',
    category: 'PiCar_V',
    spec: '[PiCar-V]  Tilt servo %br    angle: %n',
    defaults: [0]
  }

SpriteMorph.prototype.blocks.picar_v_pwm_output = {
    type: 'command',
    category: 'PiCar_V',
    spec: '[PiCar-V]  PWM %br    channel: %sf_pwmchn_dir %br    value: %n',
    defaults: ['0', 0]
  }

SpriteMorph.prototype.blocks.picar_v_servo_turn = {
    type: 'command',
    category: 'PiCar_V',
    spec: '[PiCar-V]  Servo %br    channel: %sf_pwmchn_dir %br    value: %n',
    defaults: ['0', 90]
  }

SpriteMorph.prototype.blocks.picar_v_get_analog = {
    type: 'reporter',
    category: 'PiCar_V',
    spec: '[PiCar-V]  Analog %br    channel: %sf_Achn_dir',
    defaults: ['A0']
  }

SpriteMorph.prototype.blocks.picar_v_get_digital = {
    type: 'reporter',
    category: 'PiCar_V',
    spec: '[PiCar-V]  Digital %br    channel: %sf_Dchn_dir',
    defaults: ['B20']
  }

SpriteMorph.prototype.blocks.picar_v_set_digital = {
    type: 'command',
    category: 'PiCar_V',
    spec: '[PiCar-V]  Set Digital %br    channel: %sf_Dchn_dir %br    state: %sf_io_state_dir',
    defaults: ['B20','HIGH']
  }

SpriteMorph.prototype.blocks.picar_v_calibrate = {
    type: 'command',
    category: 'PiCar_V',
    spec: '[PiCar-V]  Calibrate %br    member: %sf_cali_dir %br    offset: %n',
    defaults: ["front wheel", 0]
  }

SpriteMorph.prototype.blocks.picar_v_find_blob = {
    type: 'command',
    category: 'PiCar_V',
    spec: '[PiCar-V]  Find red blob'
  }

SpriteMorph.prototype.blocks.picar_v_get_blob = {
    type: 'reporter',
    category: 'PiCar_V',
    spec: '[PiCar-V]  Blob %sf_blob_dir',
    defaults: ["x"]
  }



// SunFounder process


SpriteMorph.prototype.picar_v_rw_run = function (motor_channel, direction, speed) { // Define process
  //reportURL('192.168.0.102:8000/run/picar-v/?action=pwmchannel&value=' + value)
  requests('picar-v', 'rw_run', motor_channel, direction, speed)
};

SpriteMorph.prototype.picar_v_rw_stop = function () {
  requests('picar-v', 'rw_stop')
};

SpriteMorph.prototype.picar_v_fw_turn = function (value) {
  //reportURL('192.168.0.102:8000/run/picar-v/?action=fw_turn&value=' + value)
  requests('picar-v', 'fw_turn', value)
};

SpriteMorph.prototype.picar_v_pan_turn = function (value) {
  //reportURL('192.168.0.102:8000/run/picar-v/?action=pan_turn&value=' + value)
  requests('picar-v', 'pan_turn', value)
};

SpriteMorph.prototype.picar_v_tilt_turn = function (value) {
  //reportURL('192.168.0.102:8000/run/picar-v/?action=tilt_turn&value=' + value)
  requests('picar-v', 'tilt_turn', value)
};

SpriteMorph.prototype.picar_v_pwm_output = function (pwm_channel, value) {
  //reportURL('192.168.0.102:8000/run/picar-v/?action=pwmchannel&value=' + value)
  requests('picar-v', 'pwm_output', pwm_channel, value)
};

SpriteMorph.prototype.picar_v_servo_turn = function (servo_channel, angle) {
  //reportURL('192.168.0.102:8000/run/picar-v/?action=servo_turn&value=' + value)
  requests('picar-v', 'servo_turn', servo_channel, angle)
};

SpriteMorph.prototype.picar_v_get_analog = function (analog_channel) {
  //reportURL('192.168.0.102:8000/run/picar-v/?action=get_analog&value=' + value)
  return requests('picar-v', 'get_analog', analog_channel)
};

SpriteMorph.prototype.picar_v_get_digital = function (digital_channel) {
  //reportURL('192.168.0.102:8000/run/picar-v/?action=get_digital&value=' + value)
  return requests('raspberry_pi', 'gpio', 'input', digital_channel)
};

SpriteMorph.prototype.picar_v_set_digital = function (digital_channel, value) {
  //reportURL('192.168.0.102:8000/run/picar-v/?action=set_digital&value=' + value)
  requests('raspberry_pi', 'gpio', 'output', digital_channel, value)
};

SpriteMorph.prototype.picar_v_calibrate = function (member, offset) {
  //reportURL('192.168.0.102:8000/run/picar-v/?action=set_digital&value=' + value)
  requests('picar-v', 'calibrate', member, offset)
};

SpriteMorph.prototype.picar_v_find_blob = function () {
  //reportURL('192.168.0.102:8000/run/picar-v/?action=set_digital&value=' + value)
  requests('picar-v', 'find_blob')
};

SpriteMorph.prototype.picar_v_get_blob = function (state) {
  //reportURL('192.168.0.102:8000/run/picar-v/?action=get_analog&value=' + value)
  return requests('picar-v', 'get_blob', state)
};
