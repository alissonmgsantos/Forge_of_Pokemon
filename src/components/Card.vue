<template>
  <div class="container">
    <img :src="image" alt="" width="200" />
    <div class="name">
      <span>{{ name }}</span>
    </div>
    <table>
      <thead>
        <th>{{ type }}</th>
        <th>{{ weight }}</th>
        <th>{{ height }}</th>
      </thead>
      <tbody>
        <td>Type</td>
        <td>Weight</td>
        <td>Height</td>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    name: { required: true },
    type: { required: true },
    weight: { required: true },
    height: { required: true },
    image: { required: true },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid #ccc;
  border-radius: 5%;
  width: 15rem;
  height: 20rem;
  padding: 1rem;

  .name {
    width: 50%;
    text-align: center;
    margin: 1rem 0;
    text-transform: uppercase;
    border-bottom: 0.2rem solid red;
    font-weight: bold;
  }

  table {
    width: 100%;
    text-align: center;
    th {
      font-size: 0.8rem;
    }
    td {
      font-size: 0.6rem;
      text-transform: uppercase;
    }
    :nth-child(2) {
      border-left: 0.1rem solid #ccc;
      border-right: 0.1rem solid #ccc;
    }
  }
}
</style>
