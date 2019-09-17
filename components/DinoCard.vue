<template>
  <div>
    <v-card>
      <v-select
        label="Dino Type"
        style="text-align=`center`"
        v-model="dinoTypeSelected"
        :items="dinoType"
      />
      <v-select
        v-if="dinoTypeSelected === 'Carnivorus' ? true : false "
        label="Carnivours"
        v-model="dinoSelected"
        :items="dinoCarnList"
        @change="chooseDino"
      />
      <v-select
        v-if="dinoTypeSelected === 'Herbivorus' ? true : false "
        label="Herbivours"
        v-model="dinoSelected"
        :items="dinoHerbList"
        @change="chooseDino"
      />
      <div v-if="dinoSelected">
        <v-select v-model="dinoStageSelected" :items="dinoStageNumber==3?dinoStage3:dinoStage4" />
        <v-input type="number" rules="dinoGrowthRules" v-modal="dinoGrowth"/>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: [dinoID],
  data() {
    return {
      dinoData: [],
      dinoStageSelected: "",
      dinoStageNumber: 0,
      dinoStage3: ["Egg", "Juvie", "Adult"],
      dinoStage4: ["Egg", "Juvie", "Sub Adult", "Adult"],

      dinoTypeSelected: "",
      dinoType: ["Herbivours", "Carnivours"],
      dinoSelected: "",
      dinoCarnList: [
        "Allo",
        "Cerato",
        "Carno",
        "Dilo",
        "Giga",
        "Sucho",
        "Utah",
        "TRex"
      ],
      dinoHerbList: [
        "Tricera",
        "Galli",
        "Diablo",
        "Maia",
        "Pachy",
        "Para",
        "Dryo"
      ],
      carnoRes: {},
      selectedRes: {},
      herbRes:{},
      dinoGrowth:0,
      dinoGrowthmin:0,
      dinoGrowthmax:0,
      dinoGrowthRules: [
        value => !!value || 'Required',
        value => (value>=dinoGrowthmin&&value<=dinoGrowthmax||value>=(dinoGrowthmin/1000)&&value<=(dinoGrowthmax/1000)) || 'DinoGrowth out of range.'
      ]

    };
  },
  created() {
    var temp = JSON.parse(localStorage.getItem("Dinodata" + dinoID));
    this.carnoRes = JSON.parse("~/static/Carno.json");
    this.herbRes = JSON.parse("~/static/Herb.json");

    this.dinoData = temp == null ? [] : temp;
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