<template>
  <div>
    <v-card>
      <v-select label="Dino Type" style="text-align=`center`" v-model="dinoTypeSelected" :items="dinoType" />
      <v-select label="Carnivours" v-model="dinoSelected" :items="dinoCarnList" />
      <v-select label="Herbivours" v-model="dinoSelected" :items="dinoHerbList" />
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dinoData: [],
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
      ]
    };
  },
  created() {
    var temp = JSON.parse(localStorage.getItem("Dinodata"));
    this.dinoData = temp == null ? [] : temp;
  },
  methods: {
    createDinoObject() {
      console.log("Message");
    }
  }
};
</script>