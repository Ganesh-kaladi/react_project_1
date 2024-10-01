export const Checkarchive = (archive,id)=>{
    return archive?.length>0 && archive.some(note => note.id === id);
}