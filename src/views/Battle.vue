<template>
  <div class="container">
    <div class="content">
      <div v-if="selected && selected.name" class="health">
        <Card
          :name="selected.name"
          :type="selected.type"
          :height="selected.height"
          :weight="selected.weight"
          :image="selected.image"
          :card_width="300"
        />
        <HealthBar :HP="playerHealth" />
      </div>
      <h1 class="versus effect-stroke">VS</h1>
      <div v-if="enemy && enemy.name" class="health">
        <Card
          :name="enemy.name"
          :type="enemy.type"
          :height="enemy.height"
          :weight="enemy.weight"
          :image="enemy.image"
          :card_width="300"
        />
        <HealthBar :HP="enemyHealth" />
      </div>
    </div>
    <div class="panel">
      <div v-if="!hasResult" class="actions">
        <button v-on:click="attack">Attack</button>
        <button v-on:click="attack">Especial</button>
        <button v-on:click="attack">Give up</button>
      </div>
      <template v-if="hasResult">
        <h1 v-if="message" class="result effect-stroke">
          {{ message }}
        </h1>
        <a class="animation-blink" v-on:click="playAgain">PLAY AGAIN</a>
      </template>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import Card from '../components/Card';
import HealthBar from '../components/HealthBar';

export default {
  components: {
    Card,
    HealthBar,
  },
  data() {
    return {
      message: '',
    };
  },
  watch: {
    hasResult() {
      switch (true) {
        case this.playerHealth > this.enemyHealth:
          this.message = 'YOU WIN';
          break;
        case this.playerHealth < this.enemyHealth:
          this.message = 'YOU LOSER';

          break;
        default:
          this.message = 'Empate';
          break;
      }
      return this.message;
    },
  },
  computed: {
    ...mapState('pokemon', {
      selected: (state) => state.selected,
      enemy: (state) => state.enemy,
    }),
    ...mapState('battle', {
      playerHealth: 'playerHealth',
      enemyHealth: 'enemyHealth',
    }),
    hasResult() {
      return this.playerHealth <= 0 || this.enemyHealth <= 0;
    },
  },
  methods: {
    ...mapActions('battle', {
      attack: 'attack',
    }),
    randomDanger(max, min) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    // attack(type) {
    //   switch (type) {
    //     case 'especial':
    //       this.enemyHealth -= this.randomDanger(25, 15);
    //       this.playerHealth -= this.randomDanger(25, 15);
    //       break;

    //     default:
    //       this.enemyHealth -= this.randomDanger(10, 5);
    //       this.playerHealth -= this.randomDanger(10, 5);
    //       break;
    //   }
    // },
    playAgain() {
      this.playerHealth = 100;
      this.enemyHealth = 100;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .versus {
      font-size: 6rem;
      text-align: center;
    }

    .health {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .actions {
      button {
        margin: 1rem 0.5rem;
        width: 5rem;
        height: 5rem;
        border-radius: 100%;
        border: 0.15rem solid #a28e8e;
        cursor: pointer;
        font-weight: bolder;
        text-transform: uppercase;
        &:hover {
          filter: brightness(85%);
        }
      }
    }
    .result {
      font-size: 6rem;
      text-align: center;
    }
    a {
      color: #fff;
      font-size: 3rem;
      cursor: pointer;
      &:hover {
        color: #f34530;
      }
    }
  }
}
</style>
