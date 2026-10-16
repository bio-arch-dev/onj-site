<script setup>
import { defineAsyncComponent } from 'vue'
import TopSection from '@/elements/Top.vue'
import CompanySection from '@/elements/Company.vue'
import CertiSection from '@/elements/Certi.vue'
import AreasSection from '@/elements/Areas.vue'
const WorksSection = defineAsyncComponent(() => import('@/elements/Works.vue'))
const SnsSection = defineAsyncComponent(() => import('@/elements/Sns.vue'))
const Contact = defineAsyncComponent(() => import('@/elements/Contact.vue'))
</script>

<template>
  <TopSection />
  <AreasSection />
  <CompanySection />
  <CertiSection />
  <WorksSection />
  <SnsSection />
  <Contact />
</template>
