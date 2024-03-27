import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ListedBooks = () => {
  return (
    <div className="lg:mx-28  lg:mt-12 mx-4 mb-3 lg:mb-24 mt-3">
      <div className="flex border  justify-center py-3 lg:py-8  rounded-2xl font-bold text-2xl bg-[#1313130D]">
        <h1>Books</h1>
      </div>
      <div className="flex justify-center mt-4 lg:mt-8">
        <select className="select   select-success w-full max-w-32 lg:max-w-52 bg-[#23BE0A] text-white lg:font-semibold lg:text-lg border-none">
          <option disabled selected>
            Sort By
          </option>
          <option>Rating</option>
          <option>Number of Pages</option>
          <option>Publisher Year</option>
        </select>
      </div>
      <div className="mt-12">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <p>
              <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>)
              (<i>English: /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional
              character in the Mario video game franchise, owned by Nintendo and
              created by Japanese video game designer Shigeru Miyamoto. Serving
              as the company's mascot and the eponymous protagonist of the
              series, Mario has appeared in over 200 video games since his
              creation. Depicted as a short, pudgy, Italian plumber who resides
              in the Mushroom Kingdom, his adventures generally center upon
              rescuing Princess Peach from the Koopa villain Bowser. His younger
              brother and sidekick is Luigi.
            </p>
          </TabPanel>

          <TabPanel>
            <p>
              <b>Toad</b> (<i>Japanese: キノピオ Hepburn: Kinopio</i>) is a
              fictional character who primarily appears in Nintendo's Mario
              franchise. Created by Japanese video game designer Shigeru
              Miyamoto, he is portrayed as a citizen of the Mushroom Kingdom and
              is one of Princess Peach's most loyal attendants; constantly
              working on her behalf. He is usually seen as a non-player
              character (NPC) who provides assistance to Mario and his friends
              in most games, but there are times when Toad(s) takes center stage
              and appears as a protagonist, as seen in Super Mario Bros. 2,
              Wario's Woods, Super Mario 3D World, and Captain Toad: Treasure
              Tracker.
            </p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
