<template>
  <div>
    <div >
      <a class="btn-floating btn-large waves-effect waves-light red addDino"><i class="material-icons">add</i></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  created() {
  },
  methods: {
    createDinoObject() {
      console.log("Message");
    },
    chooseDino(){
      // Herbivours
      if (dinoTypeSelected == this.dinoType[0]){
        for (var i=0;i<this.herbRes.herbs.length;i++){
          if (this.dinoSelected == this.herbRes.herbs[i].name){
            selectedRes= this.herbRes.herbs[i];
          }
        }
      }
      // Carnivours
      if (dinoTypeSelected == this.dinoType[1]){
        for (var i=0;i<this.carnoRes.Carnos.length;i++){
          if (this.dinoSelected == this.carnoRes.carnos.name)
          selectedRes = this.carnoRes.carnos[i];
        }
      }
    }
  }
};
</script>

<style scoped>
.addDino {
  position: absolute;
  right: 0;
  bottom: 5px;
}
</style>