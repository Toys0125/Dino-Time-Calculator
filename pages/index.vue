<template>
    <div>

    </div>
</template>

<script>
export default {
    data() {
        return{
            dinoData:[],
            dinoCarnList:["Allo","Cerato","Carno","Dilo","Giga","Sucho","Utah","TRex"],
            dinoHerbList:["Tricera","Galli","Diablo","Maia","Pachy","Para","Dryo"],

        }
    },
    created(){
        var temp = JSON.parse(localStorage.getItem('Dinodata'))
        dinoData = temp==null ? [] : temp;

    },
    methods(){
        function createDinoObject(){

            
        }
    }
}
</script>