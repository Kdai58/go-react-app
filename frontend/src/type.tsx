import { isWhiteSpaceLike } from "typescript";

interface ITask {
  ID: number | null,
  CreatedAt: Date | null,
  UpdatedAt: Date | null,
  DeletedAt: Date | null,
  Title: string,
  Text: string,
  Status: number | null
}

export default ITask;
