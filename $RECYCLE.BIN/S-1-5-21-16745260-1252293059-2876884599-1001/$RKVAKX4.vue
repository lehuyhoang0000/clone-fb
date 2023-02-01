<template>
  <div class="perfor-chart">
    <div class="perfor-header">
      <div class="chart-date">
        <div class="chart-account"><AccountPicker label="Sub-account" /></div>
        <div class="chart-account-according"><AccountPicker label="Profit according to " /></div>
      </div>
      <div>
        <DatePicker v-model="dateFrom" :label="'From'" />
        <DatePicker v-model="dateTo" :label="'To'" />
      </div>
      <div class="searching-btn"><Search />Search</div>
      <div class="searching-btn-reaload"><Resend />Reload</div>
    </div>
    <div class="period">
      <div class="btn-period">1 week</div>
      <div class="btn-period">1 month</div>
      <div class="btn-period">3 months</div>
      <div class="btn-period">6 months</div>
      <div class="btn-period">1 year</div>
    </div>
    <div class="chart-tb">
      <div v-for="car in cars" :key="car.name">
        <div class="grid">
          <div class="grid-name">{{ car.name }}</div>
          <div class="grid-price">{{ car.price }}</div>
        </div>
      </div>
    </div>
    <div class="chart"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AccountPicker from '@/components/AccountPicker/index.vue';
import DatePicker from '@/components/DatePicker/index.vue';
import Search from '@/assets/svg/search_normal.svg';
import Resend from '@/assets/svg/resend.svg';
import './style.scss';

const sampleCars = [
  {
    name: 'Opening balance',
    price: '10,000,000',
  },
  {
    name: 'Money/Stocks into account',
    price: '10,000,000',
  },
  {
    name: 'Money/Stocks out of account',
    price: '10,000,000',
  },
  {
    name: 'Closing balance',
    price: '10,000,000',
  },
  {
    name: 'Capital',
    price: '10,000,000',
  },
  {
    name: 'Gain/Loss',
    price: '0',
  },
  {
    name: '%G/L',
    price: '0',
  },
];
export default Vue.extend({
  components: {
    AccountPicker,
    DatePicker,
    Search,
    Resend,
  },

  data() {
    return {
      cars: sampleCars,
    };
  },
});
</script>

<style>
</style>
