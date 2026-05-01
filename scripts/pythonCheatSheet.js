import GettingStarted from "../storage/Python.json" with { type: "json" };

export function pythonCheatSheet() {
    const doc = document.getElementById("document");

    // Clear previous content (important for reload)
    doc.innerHTML = "";

    // Loop through sections (0,1,2...)
    for (let key in GettingStarted) {

        const section = GettingStarted[key];

        // ===== TITLE =====
        const title = document.createElement("h1");
        title.className = "docTitle";
        title.innerText = section.title;
        doc.appendChild(title);

        // ===== SUBTITLES =====
        section.subtitle.forEach(sub => {

            const subtitle = document.createElement("h3");
            subtitle.className = "docSubTitle";
            subtitle.innerText = sub.subtitle;
            doc.appendChild(subtitle);

            // ===== CONTENT WRAPPER =====
            const docContent = document.createElement("div");
            docContent.className = "docContent";

            // ===== EACH CONTENT ITEM =====
            sub.content.forEach(item => {

                // Subsubtitle
                const subSub = document.createElement("h5");
                subSub.className = "docSubSubTitle";
                subSub.innerText = item.subsubtitle;
                docContent.appendChild(subSub);

                // Text (IMPORTANT: use innerHTML)
                const text = document.createElement("p");
                text.className = "docText";
                text.innerHTML = item.text; // 🔥 renders <b>, <pre>, <code>
                docContent.appendChild(text);

            });

            doc.appendChild(docContent);
        });
    }
}