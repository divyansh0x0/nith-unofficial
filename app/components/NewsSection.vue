<script setup lang="ts">
import { ref, onMounted } from "vue";
import ButtonViewAll      from "~/components/Button/ButtonViewAll.vue";
import OverlayLoader from "~/components/OverlayLoader.vue";
const is_loading_data: Ref<boolean> = ref(true);
interface NITHEventDetails {
    name: string;
    events: EventItemDetails[];
    view_all_link: string;
}

interface EventItemDetails {
    name: string;
    link: string;
    is_new: boolean;
}


function parseAnchorTags(anchor_elements_arr: Iterable<HTMLAnchorElement>) {
    const link_details: EventItemDetails[] = [];
    let view_all_link                      = "";

    for (const anchor_el of anchor_elements_arr) {
        const text = anchor_el.textContent?.trim();
        if (!text) continue;
        let is_new = false;
        if (anchor_el.children.length == 1) {
            //Means there is an <img> tag and therefore its a new update
            is_new = true;
            console.log("NEWWWW", text);

        }
        if (text === "View All") view_all_link = anchor_el.href.trim();
        else link_details.push({ name: text, link: anchor_el.href, is_new: is_new });
    }

    return { view_all_link, link_details };
}

const are_updates_available = ref(false);
const nith_news_categories  = ref<NITHEventDetails[]>([]);
onMounted(async () => {
    try {
        // Fetch news
        const request               = await fetch("https://nith.ac.in/");
        are_updates_available.value = request.ok;

        if (!request.ok) return;

        const html           = await request.text();
        const dom            = new DOMParser().parseFromString(html, "text/html");
        const feature_events = dom.querySelectorAll<HTMLDivElement>(".main-feature-events");

        feature_events.forEach((container) => {
            const heading     = container.querySelector<HTMLHeadingElement>("h3");
            const headingText:string = heading!.textContent!.trim();
            const events      = container.querySelectorAll<HTMLAnchorElement>(".allnithlinks a");

            if (!headingText) return;

            const { view_all_link, link_details } = parseAnchorTags(events);

            if(link_details.length > 0){
                nith_news_categories.value.push({
                    name         : headingText.split(" ")[0]!,
                    events       : link_details,
                    view_all_link: view_all_link
                });
            }

        });
    }
    catch (err) {
        console.error("Failed to fetch or parse:", err);
        are_updates_available.value = false;
    }
    is_loading_data.value = false;
});

</script>


<template>
    <section class="full-section">
        <OverlayLoader :loading="is_loading_data" hint="Fetching Updates">
            <div v-if="are_updates_available === true" class="updates-container">
                <h1>Updates</h1>
                <div class="news-panel-container">
                    <div v-for="news_category in nith_news_categories" :key="news_category.name" class="news-panel">
                        <h4>
                            {{ news_category.name }}
                            <ButtonViewAll v-if="news_category.view_all_link.length > 0" :link="news_category.view_all_link"/>
                        </h4>
                        <ul class="news-items">
                            <li v-for="event in news_category.events" :key="event.name" class="item">
                                <a :href="event.link">
                                    {{ event.name }}
                                    <div class="right">
                                        <Icon class="open-event-icon" name="ic:baseline-open-in-new" width="24" height="24"/>
                                        <span v-if="event.is_new" class="new-event-label">Latest</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div v-else class="updates-not-available">
                <h1>Updates not available</h1>
            </div>
        </OverlayLoader>


    </section>
</template>

<style scoped lang="scss">
.updates-not-available {
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}



.full-section {
    position: relative;
    padding: var(--padding-md) var(--padding-sm);
    text-align: left;
    min-height: 100vh;
    height: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.updates-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
    padding: var(--padding-lg) var(--padding-md) ;

    width: fit-content;
    align-items: center;

}

.news-panel-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    //grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
    width: 100%;

    .news-panel {
        background-color: var(--color-primary-container);
        border-radius: var(--border-radius);
        display: flex;
        flex-direction: column;
        max-height: 80vh;
        overflow-x: hidden;
        overflow-y: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        width: 30%;

        h4 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--padding-md);
            border-bottom: 1px solid var(--color-on-primary-container);
            gap: var(--spacing);
            a {
                height: 1em;
                color: var(--color-on-primary-container);
            }
        }


    }
}
.news-items {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    flex-grow: 1;

    .item {
        position: relative;
        transition: 200ms transform linear;
        display: block;

        &:nth-child(even) {
            background-color: var(--color-primary-container-variant);
        }
        &:nth-child(odd){
            background-color: var(--color-primary-container);
        }
        a {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: space-between;
            //align-items: center;
            gap: var(--spacing-sm);
            padding: var(--padding-md);
            text-decoration: none;
            color: var(--color-on-primary-container);
            &:hover {
                .open-event-icon{
                    opacity: 1;
                }
            }
            .right{
                width: min-content;
                display: flex;
                flex-direction: column;
                align-content: space-between;
                justify-content: space-between;
                align-items: end;
                gap: var(--spacing-sm);
            }
        }
    }
}

.new-event-label {
    position: relative;
    font-size: 0.6em;
    height: fit-content;
    border: 1px solid var(--color-tertiary);
    color: var(--color-tertiary);
    padding: var(--padding-sm);
    border-radius: var(--border-radius);
}
.open-event-icon{
    position: relative;
    font-size: 1em;
    color: var(--color-tertiary);
    opacity: 0;
    transition: var(--transition-speed) opacity linear;
}
/* Responsive adjustments */
@media (max-width: 768px) {
    .full-section {
        .news-panel {
            width: 100%;
        }
    }
}
</style>
