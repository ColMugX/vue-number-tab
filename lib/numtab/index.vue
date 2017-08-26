<template>
  <div class="band-numtab">
    <input v-model="currentValue" type="hidden">
    <a class="band-numtab-item"
       :class="{'is-active': currentIdx === index }"
       v-for="(num,index) in total"
       :key="index"
       @click="selectNum(num, index)">
      <span class="band-numtab-label" v-text="num"></span>
    </a>
    <div class="band-numtab-mask" :style="maskStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'NumberTab',
  props: {
    total: {
      type: [Number, Array],
      default: 4
    },
    value: {
      type: Number,
      default: 1
    },
    bgColor: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    bgLeft () {
      if (typeof this.total == 'object' || typeof this.total == 'array') return `${(this.currentIdx) * (100 / this.total.length)}%`
      return `${(this.currentValue - 1) * (100 / this.total)}%`
    },
    bgRight () {
      if (typeof this.total == 'object' || typeof this.total == 'array') return `${(this.total.length - this.currentIdx - 1) * (100 / this.total.length)}%`
      return `${(this.total - this.currentValue) * (100 / this.total)}%`
    },
    maskStyle () {
      return {
        left: this.bgLeft,
        right: this.bgRight,
        backgroundColor: this.bgColor
      }
    }
  },
  mounted () {
    this.$emit('on-change', this.value)
  },
  methods: {
    selectNum (val, idx) {
      this.currentValue = val
      this.currentIdx = idx
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('on-change', val)
      this.$emit('input', val)
    }
  },
  data () {
    return {
      currentIdx: 0,
      currentValue: this.value
    }
  }
}
</script>

<style scoped>
.band-numtab {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  box-sizing: border-box;
  padding: 4px 0;
  border: 1px solid #eee;
  border-radius: 8px;
}
.band-numtab .band-numtab-item {
  z-index: 1;
  flex: 1;
  text-align: center;
  cursor: pointer;
}
.band-numtab .band-numtab-item.is-active .band-numtab-label {
  transition: color 0.3s ease;
  color: #fff;
}
.band-numtab .band-numtab-mask {
  z-index: 0;
  position: absolute;
  top: 0;
  height: 100%;
  background-color: #444751;
  border-radius: inherit;
  transition-property: left, right;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}
</style>
