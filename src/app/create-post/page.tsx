import { createNewPost } from './action';

export default function createPost() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1>Create Post</h1>
      <form action="" className="flex flex-col gap-6 w-[720px]">
        <input
          type="text"
          placeholder="Title"
          name="title"
          id="title"
          required
          className="w-full border-2 border-slate-400 bg-transparent placeholder:text-slate-400 rounded-md px-3 py-2"
        />
        <textarea
          name="body"
          id="body"
          placeholder="body"
          rows={6}
          required
          className="w-full rounded-md border-2 border-slate-400 bg-transparent placeholder:text-slate-400 px-3 py-2"
        ></textarea>
        <button formAction={createNewPost}>Create Post</button>
      </form>
    </div>
  );
}
