<template>
    <div
    >   
        <div 
            v-if="listItem.length > 0"
            class="listView" 
        >
            <div 
                class="listItem"
                v-for="item in listItem"
            >   
                <div
                    class="poster"
                >
                    <div 
                        :style="poster(item)"
                    />
                </div>
                <div>
                    {{item.title[0].content}}
                </div>

            </div>
        </div>
        <div
            v-else
        >
            검색 결과가 없습니다.
        </div>
    </div>
</template> 

<script>

export default {
    name: 'list-view',
    created() {
        console.log(this._props.listItem[0]);
    },
    props: ['listItem'],
    data() {
        return {
            poster(item) {
                return {
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(' + item.thumbnail[0].content + ')',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }
            },
            text: '',
        };
    },
};
</script>

<style lang='scss' scoped>
    .listView {
        display: flex;

        .listItem {
            width: 150px;
            height: 250px;
            margin: 15px;
            overflow: hidden;
            cursor: pointer;

            .poster {
                overflow: hidden;
                width: 150px;
                height: 220px;

                div {
                    transition: transform 1.5s ease;
                    transform: scale(1);
                }
            }

            &:hover {
                div.poster div {
                    transition: transform 3s ease;
                    transform: scale(1.1);
                }
            }
        }
    }
</style>