const FACULTY_IMAGE_VERSION = "2026-04-12-1";

export const withFacultyImageVersion = (src: string) => {
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}v=${FACULTY_IMAGE_VERSION}`;
};