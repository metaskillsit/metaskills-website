const FACULTY_IMAGE_VERSION = "2026-10-10-jinghao-hd";

export const withFacultyImageVersion = (src: string) => {
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}v=${FACULTY_IMAGE_VERSION}`;
};