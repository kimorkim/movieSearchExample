<template>
    <div class="search">
        <b-form-select 
            v-model="selected" 
            :options="options" 
            calss="mb-3 searchOptions searchItem"
        />
        <b-form-input 
            v-model="query" 
            type="text" 
            placeholder="검색어를 입력 하세요." 
            class="searchItem"
        />
        <b-button 
            :variant="'primary'" 
            href="" 
            @click="handleSearch"
            class="searchItem searchButton"
        >
            검색
        </b-button>
    </div>
</template>

<script>

export default {
    name: 'search',
    methods: {
        handleSearch() {
            if(this.query && this.query.length) {
                this.$emit('onSearch', this.query);
            } else {
                alert('검색어를 입력해 주세요.');
            }
        },
    },
    data() {
        return {
            selected: 'movie',
            options: [{
                text: '영화',
                value: 'movie',
            }],
            query: '',
        };
    },
};
</script>

<style lang='scss' scoped>
    .search {
        display: flex;

        .searchItem {
            margin:0 5px;
        }

        .searchButton {
            cursor: pointer;
        }
    }

</style>