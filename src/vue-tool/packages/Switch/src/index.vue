<template>
  <div >
    <div :class="Switch" @click="routerClick">
      <div :class="SwitchRou"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mlSwitch",
  data() {
    return {
      SwitchType:false
    };
  },
  model:{

  },
  methods: {
    routerClick: function(rou) {
      this.SwitchType = !this.SwitchType
      this.$emit('input', this.SwitchType);
      this.$emit('change', this.SwitchType);
    }
  },
  computed:{
    Switch(){
      return [
      'Switch',{
        'Switch-false' : this.SwitchType
        }
      ]
    },
    SwitchRou(){
      return [
      'Switch-rou',
          {
            'Switch-rou-true':this.SwitchType
          }
        ]
    }
  },

  components: {},
  created: function() {}
};
</script>
<style scoped>
.Switch{    
    position: relative;
    width: 65px;
    height: 32px;
    background: #8b9fea;
    border-radius: 50px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    transition: background-color 0.3s;
}
.Switch-false{
  background: #fff;
}
.Switch-rou{
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: #fff;
  position: relative;
  top: -1px;
  left: -1px;
  background: #fff;
  transition: transform 0.35s;
}
.Switch-rou-true{
  transform:translate(32px,0px);
  box-sizing: border-box;;
  border: 1px solid #eee;
}
</style>