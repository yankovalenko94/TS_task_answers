enum TypesOfMedia {
	Video = "video",
	Audio = "audio",
}

enum FormatsOfMedia {
	MP4 = ".mp4",
	MOV = ".mov",
	MKV = ".mkv",
	FLV = ".flv",
	WEBM = ".webM",
}

interface MediaProps {
	name: string;
	type: TypesOfMedia;
	format: FormatsOfMedia;
	subtitles?: string;
	marks?: unknown;
}

function playMedia(
	{ name, type, format, subtitles, marks }: MediaProps = {
		name: "example",
		type: TypesOfMedia.Video,
		format: FormatsOfMedia.MP4,
	}
): string {
	let marksLog: string;
	if (Array.isArray(marks)) {
		marksLog = marks.join(" ");
	} else if (typeof marks === "string") {
		marksLog = marks;
	} else {
		marksLog = "Unsupported type of marks";
	}

	console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? "none"}`);

	return "Media started";
}

playMedia({
	name: "WoW",
	format: FormatsOfMedia.MOV,
	type: TypesOfMedia.Video,
	subtitles: "hmhmhm hmhmhm doh",
	marks: ["4:30", "5:40"],
});
