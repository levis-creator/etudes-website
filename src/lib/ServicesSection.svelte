<script lang="ts">
  import { serviceHead, serviceItems } from "$lib";
  import SectionHead from "./SectionHead.svelte";
  import ServiceItem from "./ServiceItem.svelte";
</script>

<section id="service">
  <SectionHead sectionHead={serviceHead} />
  <div class="services-items">
    {#each serviceItems as service, i}
      <ServiceItem {service} />
    {/each}
  </div>
</section>

<style lang="scss">
  #service {
    .services-items {
      display: grid;
    }
    @media (min-width: 768px) {
      .services-items {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 2em;
      }
    }
    @media (min-width: 1024px) {
      .services-items {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
  }
</style>
