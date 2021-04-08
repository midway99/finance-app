<template>
  <div class="delete_all">
    <label class="label_delete_all" for="delete_all">Удалить все записи</label>
    <button
        id="delete_all"
        class="btn-small red delete_all_btn darken-1"
        @click="this.$store.dispatch('deleteAllRecord')"
    >
      <i class="material-icons">delete</i>
    </button>
  </div>
  <table class="table_section responsive-table">
    <thead>
      <tr>
        <th>#</th>
        <th>{{ this.$locale("Amount") }}</th>
        <th>{{ this.$locale("Date") }}</th>
        <th>{{ this.$locale("Category") }}</th>
        <th>{{ this.$locale("Type") }}</th>
        <th>{{ this.$locale("Open") }}</th>
        <th>{{this.$locale("Delete")}}</th>
        <th>{{this.$locale("Edit")}}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(rec, idx) of records" :key="rec.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ this.$filters(rec.amount) }}</td>
        <td>
          {{ this.$date(rec.date) }}
        </td>
        <td>{{ rec.categoryName }}</td>
        <td>
          <span
            :class="[rec.typeName]"
            class="white-text badge blue darken-4"
            >{{ rec.typeText }}</span
          >
        </td>
        <td>
          <button
            class="btn-small red darken-1"
            @click="this.$router.push('/detail-record/' + rec.id)"
          >
            <i class="material-icons">open_in_new</i>
          </button>
        </td>
        <td>
          <button
              class="btn-small red darken-1"
              @click="this.$store.dispatch('deleteRecord')"
          >
            <i class="material-icons">delete</i>
          </button>
        </td>
        <td>
          <button
              class="btn-small red darken-1"
              @click="this.$store.dispatch('editRecord')"
          >
            <i class="material-icons">edit</i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "HistoryTable",
  props: ["records"],
};
</script>

<style>
.delete_all{
  text-align: right;
  margin: 10px 0;

}
.label_delete_all{
  font-size: 16px;
  color:#000;
  font-weight: 600;
  margin-right: 10px;
}
</style>
